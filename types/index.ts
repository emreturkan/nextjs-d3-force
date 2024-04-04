export interface Node extends d3.SimulationNodeDatum {
  id: string;
  img: string;
  size: number;
}

export interface Link {
  id?: string;
  source: string;
  target: string;
}

export interface Dataset {
  nodes: Node[];
  links: Link[];
}
