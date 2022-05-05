import { ClientLib } from '@clockwork-projects/clientlib';
declare type ClientState = {
    client: ClientLib;
};
export declare const useClientLib: import("pinia").StoreDefinition<"clientlib", ClientState, {}, {
    initialize(config: string): void;
}>;
export {};
//# sourceMappingURL=useClientLib.d.ts.map