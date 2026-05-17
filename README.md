

# TaskFlow

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router)
![Motion](https://img.shields.io/badge/Motion-EE3B8B?style=for-the-badge&logo=framer)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)

Aplicação de gerenciamento de tarefas desenvolvida com React, TypeScript, Motion e CSS puro, com foco em acessibilidade, animações suaves e experiência do usuário.

O projeto foi criado com foco em:

- interface moderna com tema escuro;
- animações suaves com Motion;
- acessibilidade e semântica HTML;
- responsividade para todos os dispositivos;
- boas práticas de organização de código.

---

## 🚀 Demo



https://github.com/user-attachments/assets/c341904b-0b2c-47fc-b738-b4dde2142b0f





---

## ☁️ Deploy

O projeto foi publicado utilizando a plataforma Vercel.

---

## ✨ Preview

O TaskFlow possui:

- criação, edição e exclusão de tarefas;
- toggle de status pendente ↔ concluída;
- filtro por status e busca em tempo real;
- paginação da lista de tarefas;
- modal de confirmação ao excluir;
- toasts de sucesso e erro;
- validação de formulários com feedback visual;
- persistência de dados com localStorage;
- animações de entrada, saída e layout com Motion;
- design responsivo para mobile, tablet e desktop.

---

## 🚀 Tecnologias utilizadas

- ⚛️ React 19
- 🔷 TypeScript
- ⚡ Vite
- 🛣️ React Router v7
- 🎞️ Motion
- 🔍 Lucide React
- 🌐 HTML5
- 🎯 CSS3

---

## 📂 Estrutura do projeto

```bash
src/
├── components/
│   ├── Home/
│   │   ├── FilterBar.tsx
│   │   ├── Header.tsx
│   │   ├── SummaryCards/
│   │   └── TaskList/
│   │       ├── TaskCard.tsx
│   │       └── TaskList.tsx
│   └── shared/
│       ├── ConfirmModal/
│       └── ToastContainer/
├── context/
│   └── TaskContext.tsx
├── hooks/
│   └── useToast.ts
├── pages/
│   ├── Home.tsx
│   ├── NewTask.tsx
│   └── EditTask.tsx
├── styles/
│   └── Form.css
└── types/
    └── task.ts
```

---

## ⚙️ Funcionalidades

- ➕ Adicionar nova tarefa
- ✏️ Editar tarefa existente
- 🗑️ Excluir com modal de confirmação
- ✅ Marcar como concluída (toggle)
- 🔍 Busca por título, descrição ou prioridade
- 🗂️ Filtro por status (todas, pendentes, concluídas)
- 📄 Paginação da lista
- 🔔 Toasts de sucesso e erro
- 💾 Persistência com localStorage
- 🎞️ Animações com Motion
- ⚠️ Validação de formulários

---

## ♿ Acessibilidade

O projeto inclui melhorias de acessibilidade como:

- uso de tags semânticas (`main`, `section`, `header`, `article`, `nav`);
- `aria-label` nos botões de ação;
- `aria-pressed` nos botões de toggle e filtro;
- `aria-live` nas notificações toast;
- `aria-invalid` e `aria-describedby` nos campos com erro;
- `aria-busy` no botão de submit durante o loading;
- `role="dialog"` e `aria-modal` no modal de confirmação;
- `role="alert"` nas mensagens de erro;
- foco gerenciado com `autoFocus` no modal;
- contraste aprimorado;
- suporte à navegação por teclado.

---

## 📱 Responsividade

O layout foi desenvolvido para funcionar em:

- desktop;
- tablets;
- dispositivos móveis.

---

## 🛠️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/RenataARocha/aplicacao-de-tarefas.git
```

Entre na pasta:

```bash
cd aplicacao-de-tarefas
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 🎨 Personalização

Você pode facilmente alterar:

- cores e gradientes (via variáveis CSS em `global.css`);
- animações e transições;
- fontes;
- efeitos de glow e blur;
- tamanhos e espaçamentos;
- favicon.

---

## 📌 Melhorias futuras

- 🌙 Tema claro/escuro
- 📊 Gráfico de produtividade
- 🏷️ Sistema de categorias/tags
- 📅 Integração com calendário
- 🔔 Lembretes por data de vencimento
- ⚡ Atalhos de teclado
- 🔄 Drag and drop para reordenar tarefas

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- gerenciamento de estado global com Context API;
- tipagem avançada com TypeScript;
- persistência de dados com localStorage;
- acessibilidade com ARIA e semântica HTML;
- animações e transições com Motion;
- responsividade com CSS puro e variáveis CSS;
- componentização e organização de projeto React;
- tratamento de erros e feedback ao usuário.

---

## 👩‍💻 Desenvolvido por

Renata Alexandre Rocha  
Front-End Developer | React | TypeScript
