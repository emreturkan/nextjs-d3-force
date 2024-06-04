"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Dataset, Node } from "@/types";

interface Props {
  dataset: Dataset;
}

const NetworkGraph: React.FC<Props> = ({ dataset }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const margin = { top: 30, right: 80, bottom: 30, left: 30 };
    const width = 1600;
    const height = 1200;

    const simulation: any = d3
      .forceSimulation()
      .force(
        "link",
        d3.forceLink().id((d: any) => d.id)
      )
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2));
    simulation.restart();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const linkGroup = svg.append("g").attr("class", "links");
    const nodeGroup = svg.append("g").attr("class", "nodes");

    let link = linkGroup
      .selectAll("line")
      .data(dataset.links)
      .enter()
      .append("line")
      .style("stroke", "white")
      .style("stroke-width", 2.5);

    let node: any = nodeGroup.selectAll("image").data(dataset.nodes);
    node.exit().remove();
    node = node
      .enter()
      .append("image")
      .attr("xlink:href", (d: Node) => d.img)
      .attr("width", (d: Node) => d.size + 5)
      .attr("height", (d: Node) => d.size + 5)
      .call(
        d3
          .drag<SVGSVGElement, Node, unknown>()
          .on("start", (event, d) => dragstarted(event, d))
          .on("drag", (event, d) => dragged(event, d))
          .on("end", (event, d) => dragended(event, d))
      )
      .merge(node);

    simulation.nodes(dataset.nodes);
    simulation.force("link").links(dataset.links);
    simulation.restart();
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("x", (d: any) => d.x - 25).attr("y", (d: any) => d.y - 25);
    });

    function dragstarted(event: any, d: Node) {
      if (!event.active) simulation.alphaTarget(0.1).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: Node) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: Node) {
      if (!event.active) simulation.alphaTarget(0.1).restart();

      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [dataset]);

  return <svg ref={svgRef}></svg>;
};

export default NetworkGraph;
