CREATE TABLE utentes (
    id_utente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL UNIQUE,
    provincia VARCHAR(50) NOT NULL,
    municipio VARCHAR(50) NOT NULL,
    comuna VARCHAR(50),
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6),
    acesso_irrigacao BOOLEAN DEFAULT FALSE,
    nivel_escolaridade VARCHAR(30), -- 'nenhum', 'basico', 'medio'
    data_registo DATE DEFAULT CURRENT_DATE,
    id_tecnico_responsavel INTEGER REFERENCES tecnicos(id_tecnico)
);

CREATE TABLE tecnicos (
    id_tecnico SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(15) NOT NULL,
    provincia_atuacao VARCHAR(50),
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao DATE DEFAULT CURRENT_DATE
);

CREATE TABLE administradores (
    id_admin SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    perfil VARCHAR(30) DEFAULT 'suporte' -- 'suporte', 'super_admin'
);

CREATE TABLE talhoes (
    id_talhao SERIAL PRIMARY KEY,
    id_utente INTEGER REFERENCES utentes(id_utente),  -- dono
    nome_talhao VARCHAR(50),           -- "Talhão Norte", "Roça Velha"
    area_hectares DECIMAL(8,2),        -- tamanho
    tipo_solo VARCHAR(30),             -- arenoso, argiloso, franco
    altitude_metros INTEGER,           -- opcional
    id_cultura INTEGER REFERENCES culturas(id_cultura),  -- o que está plantado
    data_plantio DATE,                 -- quando plantou
    fase_atual VARCHAR(30),            -- germinação, floração, maturação...
    produtividade_estimada_kg_ha DECIMAL(8,2)
);

CREATE TABLE culturas (
    id_cultura SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE, -- 'milho', 'feijao', 'mandioca', 'cafe'
    ciclo_dias INTEGER, -- dias do plantio à colheita
    temp_min_ideal DECIMAL(4,1),
    temp_max_ideal DECIMAL(4,1),
    precipitacao_ideal_mm DECIMAL(6,2)
);

CREATE TABLE prototipos_cenarios (
    id_cenario SERIAL PRIMARY KEY,
    codigo VARCHAR(10) NOT NULL UNIQUE, -- 'P1', 'PR2', 'C3', etc.
    grupo VARCHAR(20) NOT NULL, -- 'plantio', 'pragas', 'clima', 'solo', 'colheita'
    pergunta_agricultor TEXT NOT NULL, -- ex: "Se nao pulverizar contra lagarta, quanto perco?"
    descricao_tecnica TEXT, -- para uso do técnico
    parametros_entrada JSONB, -- ex: ["cultura", "fase", "temperatura"]
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE sessoes_simulacao (
    id_sessao SERIAL PRIMARY KEY,
    id_utente INTEGER REFERENCES utentes(id_utente),
    id_tecnico INTEGER REFERENCES tecnicos(id_tecnico), -- pode ser NULL se agricultor simulou sozinho
    id_cenario INTEGER REFERENCES prototipos_cenarios(id_cenario),
    data_simulacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parametros_usados JSONB, -- o que o agricultor escolheu
    resultado_gerado TEXT, -- resposta do SAD
    recomendacao_final TEXT,
    agricultor_seguiu_recomendacao BOOLEAN -- opcional
);

CREATE TABLE dados_climaticos (
    id_clima SERIAL PRIMARY KEY,
    provincia VARCHAR(50) NOT NULL,
    data_registo DATE NOT NULL,
    temp_min DECIMAL(5,2),
    temp_max DECIMAL(5,2),
    precipitacao_mm DECIMAL(6,2),
    umidade_percent DECIMAL(5,2),
    fonte VARCHAR(50), -- 'INMET', 'CPTEC', 'previsto'
    UNIQUE(provincia, data_registo, fonte)
);

CREATE TABLE pragas (
    id_praga SERIAL PRIMARY KEY,
    nome_comum VARCHAR(80) NOT NULL, -- 'lagarta-do-cartucho'
    nome_cientifico VARCHAR(100),
    culturas_afetadas TEXT[], -- array de culturas
    temperatura_ideal_min DECIMAL(4,1),
    temperatura_ideal_max DECIMAL(4,1),
    ciclo_dias INTEGER,
    metodo_controle TEXT
);

CREATE TABLE ocorrencias_pragas (
    id_ocorrencia SERIAL PRIMARY KEY,
    id_praga INTEGER REFERENCES pragas(id_praga),
    provincia VARCHAR(50) NOT NULL,
    data_obs DATE DEFAULT CURRENT_DATE,
    nivel_infestacao VARCHAR(20), -- 'baixo', 'medio', 'alto'
    fonte VARCHAR(100) -- 'tecnico', 'agricultor', 'relatorio'
);

CREATE TABLE regras_decisao (
    id_regra SERIAL PRIMARY KEY,
    codigo_regra VARCHAR(20) UNIQUE,
    condicao JSONB NOT NULL, -- ex: {"temp_max": ">32", "umidade": "<40", "cultura": "milho"}
    recomendacao TEXT NOT NULL,
    urgencia VARCHAR(20), -- 'imediata', '48h', '1_semana'
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE alertas_enviados (
    id_alerta SERIAL PRIMARY KEY,
    id_utente INTEGER REFERENCES utentes(id_utente),
    tipo_alerta VARCHAR(30), -- 'seca', 'praga', 'geada', 'chuva'
    mensagem TEXT NOT NULL,
    canal VARCHAR(20), -- 'sms', 'ussd', 'voz'
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lido BOOLEAN DEFAULT FALSE
);

CREATE TABLE logs_erros (
    id_log SERIAL PRIMARY KEY,
    data_erro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_erro VARCHAR(50), -- 'simulacao', 'api', 'base_dados', 'envio_sms'
    mensagem_erro TEXT,
    -- Quem estava a usar quando o erro ocorreu?
    id_utente INTEGER REFERENCES utentes(id_utente),
    id_tecnico INTEGER REFERENCES tecnicos(id_tecnico),
    -- Estado
    resolvido BOOLEAN DEFAULT FALSE,
    resolvido_por INTEGER REFERENCES administradores(id_admin),
    data_resolucao TIMESTAMP
);

CREATE TABLE pedidos_suporte (
    id_pedido SERIAL PRIMARY KEY,
    id_tecnico INTEGER REFERENCES tecnicos(id_tecnico) NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT NOT NULL,
    prioridade VARCHAR(20) DEFAULT 'media', -- 'baixa', 'media', 'alta'
    estado VARCHAR(20) DEFAULT 'aberto', -- 'aberto', 'em_analise', 'resolvido'
    id_admin_responsavel INTEGER REFERENCES administradores(id_admin),
    resposta_admin TEXT,
    data_resolucao TIMESTAMP
);

CREATE TABLE regras_decisao_historico (
    id_historico SERIAL PRIMARY KEY,
    id_regra INTEGER REFERENCES regras_decisao(id_regra),
    versao_anterior JSONB,
    versao_nova JSONB,
    alterado_por INTEGER REFERENCES administradores(id_admin),
    data_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    motivo TEXT
);