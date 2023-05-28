<div align="center">
   <img src="https://github.com/ReinanHS/poc-opentelemetry-php/assets/28494067/d12f0f12-4473-4cdd-87e6-a2c5c8233061" alt="logo" width="80%">
</div>

POC Distributed Tracing PHP
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

![Fluxo do microsserviço](https://github.com/ReinanHS/poc-distributed-tracing-php/assets/28494067/a278ef26-4049-45f8-9b3b-252869c28b52)

## Configuração do ambiente 

A seguir, apresentam-se os requisitos e etapas fundamentais para a configuração do seu ambiente a fim de executar o projeto de exemplo.

### Requisitos

- Docker
- Git
- Make

### Instalação

A maneira recomendada de instalar este projeto é seguindo estas etapas:

1. Realize o clone do projeto para a sua máquina

```shell
git clone https://github.com/ReinanHS/poc-distributed-tracing-php.git
```

2. Acessar as pastas do projeto

```shell
cd poc-distributed-tracing-php 
docker compose up
```

### Visualizar informações

Veja as etapas necessárias para conseguir visualizar as informações geradas.

#### ZipKin

O Zipkin é uma ferramenta de rastreamento distribuído amplamente utilizada em sistemas distribuídos. Ele permite rastrear e visualizar o fluxo de solicitações entre os diferentes componentes de um sistema, fornecendo informações valiosas para a identificação e solução de problemas de desempenho.

Para visualizar as informações do rastreamento distribuído acesse a URL abaixo:

- Acesse a URL [http://127.0.0.1:9411](http://127.0.0.1:9411) para ter acesso de informações que estão disponíveis no ZipKin.
- No menu clique no botão "Dependencies"
- Clique no botão "Run Query"

Essas serão as informações que serão exibidas para você após finalizar as etapas anteriores:

![image](https://github.com/ReinanHS/poc-distributed-tracing-php/assets/28494067/11349e1f-ddc0-4367-8d4a-60a6c52c1ea9)

#### Jaeger

O Jaeger é uma plataforma de rastreamento distribuído desenvolvida para ajudar a monitorar, solucionar problemas e otimizar o desempenho de sistemas distribuídos complexos.

Ele foi projetado para trabalhar em conjunto com o conceito de "rastreamento de solicitações", permitindo acompanhar o fluxo de solicitações em uma arquitetura distribuída e fornecer informações detalhadas sobre o tempo gasto em cada componente envolvido.

Para visualizar as informações do rastreamento distribuído acesse a URL abaixo:

- Acesse a URL [http://localhost:16686](http://localhost:16686) para ter acesso de informações que estão disponíveis no Jaeguer.
- No menu clique no botão "System Architecture"
- Clique no botão "DAG"

Essas serão as informações que serão exibidas para você após finalizar as etapas anteriores:

![image](https://github.com/ReinanHS/poc-distributed-tracing-php/assets/28494067/b5af9a93-42a5-4e2f-abf0-e3f90a52d8d1)

#### Grafana

O Grafana é uma plataforma de visualização e monitoramento de código aberto amplamente utilizada para criar painéis interativos e gráficos visuais que exibem dados de métricas e logs.

Com o Grafana, os usuários podem conectar uma variedade de fontes de dados, como Prometheus, InfluxDB, Elasticsearch e muitos outros, para coletar dados e criar visualizações personalizadas. Ele oferece uma ampla gama de opções de painéis e gráficos, permitindo que os usuários criem dashboards informativos e interativos para monitorar o desempenho e a saúde de sistemas, aplicativos e infraestrutura.

- Acesse a URL [http://localhost:3000](http://localhost:3000) para ter acesso de informações que estão disponíveis no Grafana.
- Utilize o usuário `admin` e a senha `secret` para acessar as informações. 
- Na dashboard substitua o valor da variável `app_name` por `otel_service_a`

Veja um exemplo das informações que estão disponíveis nesse serviço:

![image](https://github.com/ReinanHS/poc-distributed-tracing-php/assets/28494067/c2c8ab1c-f722-4a7e-908e-99771889de4d)

### Software stack

Esse projeto roda nos seguintes softwares:

- Git 2.33+
- Hyperf
- ZipKin
- Jaeger
- Prometheus
- Grafana
- MySQL
- Redis

### Changelog

Por favor, veja [CHANGELOG](CHANGELOG.md) para obter mais informações sobre o que mudou recentemente.

### Seja um dos contribuidores

Quer fazer parte desse projeto? Clique AQUI e leia [como contribuir](CONTRIBUTING.md).

### Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
