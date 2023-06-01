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

## Ferramentas de Observabilidade

Selecionei algumas ferramentas que iremos utilizar o decorrer desse repositório para exemplificar o uso da observabilidade dentro do framework do Hyperf.

### Ferramentas de monitoramento de infraestrutura

O monitoramento de infraestrutura é uma prática fundamental para garantir o bom funcionamento de sistemas e serviços. Ao acompanhar de perto o desempenho e o estado da infraestrutura, é possível identificar problemas, otimizar recursos.

#### Prometheus

Uma das principais ferramentas de observabilidade é o Prometheus. Trata-se de um sistema de monitoramento e alerta, capaz de coletar e armazenar métricas sobre a infraestrutura. O Prometheus é altamente escalável e possui uma arquitetura flexível, o que o torna ideal para ambientes distribuídos. Ele permite a coleta de métricas em tempo real, o que possibilita uma visão detalhada do desempenho do sistema. Além disso, o Prometheus oferece recursos avançados, como consultas e alertas personalizados, permitindo uma análise profunda dos dados coletados.

- Acesse a URL http://localhost:9090 para ter acesso de informações que estão disponíveis no Promotheus.

#### Grafana

Outra ferramenta amplamente utilizada é o Grafana. O Grafana é uma plataforma de visualização de dados que se integra perfeitamente com o Prometheus e outras fontes de dados.

Com o Grafana, é possível criar painéis personalizados e intuitivos, exibindo métricas e gráficos em tempo real. Isso facilita a compreensão e a análise dos dados de monitoramento da infraestrutura, possibilitando a detecção rápida de problemas e tendências.

- Acesse a URL http://localhost:3000 para ter acesso de informações que estão disponíveis no Grafana.
- Utilize o usuário **admin** e a senha **secret** para acessar as informações. 
- Na dashboard substitua o valor da variável `app_name` por `otel_service_a`

Veja um exemplo das informações que estão disponíveis nesse serviço:

![image](https://github.com/ReinanHS/poc-distributed-tracing-php/assets/28494067/c2c8ab1c-f722-4a7e-908e-99771889de4d)

### Ferramentas de rastreamento distribuído

Em sistemas distribuídos complexos, compreender o fluxo das solicitações através de diferentes componentes e serviços pode ser um desafio. É nesse cenário que as ferramentas de rastreamento distribuído desempenham um papel fundamental, permitindo a visibilidade e a compreensão do comportamento do sistema como um todo.

#### Jaeger

Uma das ferramentas mais populares de rastreamento distribuído é o Jaeger. O Jaeger é um sistema de código aberto que facilita a rastreabilidade de solicitações complexas em ambientes distribuídos. Ele fornece uma visão detalhada de cada solicitação à medida que atravessa os diferentes serviços e componentes envolvidos.

- Acesse a URL http://localhost:16686 para ter acesso de informações que estão disponíveis no Jaeguer.
- No menu clique no botão "System Architecture"
- Clique no botão "DAG"

Essas serão as informações que serão exibidas para você após finalizar as etapas anteriores:

![image](https://github.com/ReinanHS/poc-distributed-tracing-php/assets/28494067/b5af9a93-42a5-4e2f-abf0-e3f90a52d8d1)

#### Zipkin

Outra ferramenta importante é o Zipkin. O Zipkin é outra plataforma de rastreamento distribuído de código aberto que oferece recursos semelhantes ao Jaeger. Ele permite visualizar o fluxo de solicitações em um sistema distribuído, rastreando o tempo gasto em cada serviço e identificando possíveis gargalos ou problemas de desempenho.

- Acesse a URL http://127.0.0.1:9411 para ter acesso de informações que estão disponíveis no ZipKin.
- No menu clique no botão "**Dependencies**"
- Clique no botão "**Run Query**"

### Ferramentas de gerenciamento e centralização de logs

Em ambientes de TI complexos, onde diversos sistemas e componentes estão em funcionamento, o gerenciamento e a centralização de logs se tornam essenciais para manter a visibilidade e o controle sobre o funcionamento do sistema como um todo. As ferramentas de gerenciamento de logs ajudam a coletar, armazenar e analisar registros de várias fontes, permitindo uma visão unificada e facilitando a identificação de problemas e anomalias.

#### Graylog

Um ferramenta de destaque é o Graylog, que oferece recursos abrangentes de gerenciamento e centralização de logs. O Graylog permite coletar, armazenar e analisar logs de várias fontes, incluindo aplicativos, servidores e dispositivos de rede. Ele possui uma interface intuitiva, com recursos de pesquisa avançada, filtragem e alertas personalizados.

- Acesse a URL http://localhost:9000 para ter acesso de informações que estão disponíveis no Graylog.
- Utilize o usuário **admin** e a senha **secret** para acessar as informações.
- Clicar em System > Inputs
- Selecionar o tipo de input como GELF TCP
- Clicar em Launch new input
- Selecionar o node que vamos utilizar
- Adicione um título
- Escolha a porta 12201
- Salve as informações

Após fazer essas configurações remova os comentários das configurações do log dos serviços no arquivo `common-services.yml`.

Use o comando abaixo para iniciar o serviço:

```shell
docker compose -f=docker-graylog.yml up
```

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
- Graylog

### Changelog

Por favor, veja [CHANGELOG](CHANGELOG.md) para obter mais informações sobre o que mudou recentemente.

### Seja um dos contribuidores

Quer fazer parte desse projeto? Clique AQUI e leia [como contribuir](CONTRIBUTING.md).

### Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
