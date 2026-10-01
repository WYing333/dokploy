import { pongLabel } from "./pong";

export function pingLabel(depth: number): string {
	return depth <= 0 ? "ping" : `ping>${pongLabel(depth - 1)}`;
}
