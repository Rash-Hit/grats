# Advanced Example

This example includes a relatively fully featured app to demonstrate how real-world applications can be built with Grats.

## Features

- [Node interface](https://graphql.org/learn/global-object-identification/)
- [dataloader](https://github.com/graphql/dataloader)
- [Connections](https://relay.dev/graphql/connections.htm) (as used by Relay)
- Custom scalars

## Implementation notes

Dataloaders are attached to the per-request viewer context. This enables per-request caching while avoiding the risk of leaking data between requests/users.

The viewer context is passed all the way through the app to the data layer. This would enable permission checking to be defined as close to the data as possible.

## Running the demo

- `$ pnpm install`
- `$ pnpm run start`