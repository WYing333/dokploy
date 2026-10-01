import { pingLabel } from "./ping";

export function pongLabel(depth: number): string {
	return depth <= 0 ? "pong" : `pong>${pingLabel(depth - 1)}`;
}
