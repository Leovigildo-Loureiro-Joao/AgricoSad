# 🌾 SAD AgroClima - Sistema de Apoio à Decisão Agrícola

## 📌 Sobre o Projeto

O **SAD AgroClima** é um Sistema de Apoio à Decisão (SAD) desenvolvido para auxiliar pequenos agricultores angolanos a enfrentar os desafios das **alterações climáticas** e das **pragas agrícolas**. O sistema permite simular cenários como *"e se vier uma seca?"* ou *"e se a lagarta atacar?"*, gerando recomendações práticas sobre quando plantar, como proteger a lavoura e se vale a pena colher mais cedo.

## 🎯 Objetivo

Fortalecer a tomada de decisão do agricultor na prevenção de riscos, redução de perdas e aumento da produtividade agrícola, através de um simulador acessível por **USSD**, **SMS** e **chamada de voz**.

## 👥 Atores do Sistema

| Ator | Papel | Canal de Acesso |
|------|-------|-----------------|
| **Agricultor** | Utilizador final que recebe alertas e simula cenários | USSD, SMS, Voz |
| **Técnico de Extensão** | Apoia o agricultor, regista dados e realiza simulações avançadas | Web (React.js) |
| **Administrador de Suporte** | Mantém o sistema, resolve falhas e valida regras de decisão | Web (React.js) |

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** com **Express** - API REST
- **PostgreSQL** - Base de dados relacional
- **Prisma** - ORM para acesso aos dados

### Frontend (Web)
- **React.js** com **TypeScript** - Interface para técnicos e administradores
- **Vite** - Build tool

### Canais de Comunicação (Agricultor)
- **USSD** - Menus interativos (*123#)
- **SMS** - Alertas e recomendações
- **Voz (IVR)** - Chamadas automatizadas

### Serviços Externos
- **AfricasTalking** - Gateway para USSD/SMS/Voz
- **OpenWeatherMap** - Dados climáticos

## 📊 Estrutura da Base de Dados

Principais entidades:

- `utentes` - Agricultores
- `tecnicos` - Técnicos de extensão
- `administradores` - Suporte do sistema
- `talhoes` - Parcelas de terra
- `culturas` - Catálogo de culturas (milho, feijão, mandioca, café)
- `pragas` - Catálogo de pragas
- `regras_decisao` - Motor de inferência (regras SE-ENTÃO)
- `sessoes_simulacao` - Histórico de simulações
- `alertas_enviados` - Registos de alertas
- `logs_erros` - Registo automático de erros

## 🧠 Cenários de Simulação (22 protótipos)

| Grupo | Quantidade | Exemplo |
|-------|------------|---------|
| Plantio | 5 | "Qual a melhor data para plantar milho?" |
| Pragas | 5 | "Se não pulverizar, quanto perco?" |
| Clima extremo | 5 | "Vem seca? Devo colher mais cedo?" |
| Solo e água | 4 | "O meu solo precisa de fertilizante?" |
| Colheita e pós-colheita | 3 | "Devo colher já ou esperar?" |

## 📁 Estrutura do Projeto
    ``` bash
    SAD-AgroClima/
    ├── backend/
    │   ├── src/
    │   │   ├── controllers/     # Lógica das rotas
    │   │   ├── models/          # Modelos da base de dados
    │   │   ├── routes/          # Endpoints da API
    │   │   ├── services/        # Regras de negócio e simulações
    │   │   └── utils/           # Funções auxiliares
    │   ├── prisma/              # Schema do banco de dados
    │   └── package.json
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── components/      # Componentes reutilizáveis
    │   │   ├── pages/           # Páginas (Dashboard, Simulações, etc.)
    │   │   ├── services/        # Chamadas à API
    │   │   └── App.tsx
    │   └── package.json
    │
    ├── ussd-sms-voice/          # Configuração do AfricasTalking
    ├── database/                # Scripts SQL e migrações
    ├── docs/                    # Documentação do projeto
    └── docker-compose.yml       # Orquestração dos serviços


## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- PostgreSQL (v14 ou superior)
- npm ou yarn

### Passos

#### **Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/sad-agroclima.git
cd sad-agroclima
```

#### Configurar a base de dados

```bash
cd database
psql -U seu_usuario -d seu_banco -f schema.sql
```
#### Configurar o backend

```bash
cd backend
cp .env.example .env

# Editar o .env com as credenciais do banco de dados
npm install
npm run dev
```
#### Configurar o frontend

```bash
cd frontend
cp .env.example .env
# Editar o .env com a URL da API
npm install
npm run dev
```
#### Aceder à aplicação

- Frontend Web: http://localhost:5173

- API Backend: http://localhost:3000

##📋 Variáveis de Ambiente
#### Backend (.env)
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sad_agroclima"
PORT=3000
JWT_SECRET="seu_secret_aqui"
AFRICASTALKING_API_KEY="sua_chave_aqui"
AFRICASTALKING_USERNAME="seu_usuario"
```
#### Frontend (.env)
```env
VITE_API_URL="http://localhost:3000/api"
```
#### 📄 Licença
Este projeto é de uso académico, desenvolvido como Trabalho de Fim de Curso no Instituto Superior Politécnico Metropolitano de Angola (IMETRO).