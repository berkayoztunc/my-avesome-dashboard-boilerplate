<script setup>
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import { configureChains, createClient } from '@wagmi/core';
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';

const chains = [mainnet];
const projectId = '6e6f5aa790878a9e77cff972d0ef3d78';

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);
</script>
<template>
  <w3m-core-button></w3m-core-button>
</template>
