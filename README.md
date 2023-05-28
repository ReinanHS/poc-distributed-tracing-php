<div align="center">
   <img src="https://github.com/ReinanHS/poc-hyperf-observability/raw/main/.github/content/observability-hyperf.png" alt="logo" width="80%">
</div>

POC Opentelemetry PHP
=======================================

[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-green)](LICENCE)
[![Team](https://img.shields.io/badge/Team-General-red)](https://gitlab.com/educa-code-labs/general)

* * *

Este repositório é uma extensão do projeto [poc-hyperf-observability](https://github.com/ReinanHS/poc-hyperf-observability), com o objetivo principal de demonstrar o funcionamento do rastreamento distribuído entre os microsserviços. Todos os conceitos documentados no repositório mencionado acima foram utilizados para ilustrar esse processo. Antes de iniciar a leitura deste repositório, é importante ler o primeiro repositório, pois muitos conceitos aplicados aqui foram previamente explicados no outro repositório no Github.

## O que é rastreamento distribuído?

O rastreamento distribuído é uma técnica utilizada em sistemas distribuídos para monitorar e registrar o fluxo de informações entre diferentes componentes ou microsserviços que trabalham juntos para fornecer uma funcionalidade específica. Em um sistema distribuído, várias partes do processamento são divididas entre diferentes serviços, e o rastreamento distribuído permite acompanhar a execução e o desempenho desses serviços de forma coordenada.

O rastreamento distribuído envolve a geração de identificadores únicos para transações ou solicitações à medida que passam por diferentes serviços. Esses identificadores permitem rastrear o caminho da solicitação através dos diferentes componentes do sistema distribuído, permitindo que os desenvolvedores identifiquem e resolvam problemas de desempenho, depuração e monitoramento.

## Cenário de exemplo

Foi desenvolvido um cenário fictício para demonstrar o conceito de rastreamento distribuído. Nesse cenário, existem três microsserviços que compartilham informações entre si. A seguir, apresentamos um exemplo ilustrativo desse cenário:

1. O **serviço A** recebe uma requisição.
2. Após receber a requisição, o **serviço A** envia uma solicitação para o **serviço B** processar as informações.
3. Quando o **serviço B** processa as informações, ele envia os dados para o **serviço C**, que os armazena no banco de dados.

Podemos observar que o fluxo de informações passa por vários serviços antes de ser concluído. Abaixo, temos um diagrama visual do fluxo:

### Software stack

Esse projeto roda nos seguintes softwares:

- Git 2.33+
- Hyperf
- ZipKin
- Jaeger
- Promotheus
- Grafana
- MySQL
- Redis

### Changelog

Por favor, veja [CHANGELOG](CHANGELOG.md) para obter mais informações sobre o que mudou recentemente.

### Seja um dos contribuidores

Quer fazer parte desse projeto? Clique AQUI e leia [como contribuir](CONTRIBUTING.md).

### Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.