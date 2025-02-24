# React Kanban

Um sistema de **Kanban** desenvolvido com **React + Vite**, permitindo a gestão eficiente de tarefas, com funcionalidades como criação, edição e movimentação entre colunas.

## 📌 Recursos
- Criar, editar e excluir tarefas
- Arrastar e soltar para mudar o status das tarefas
- Persistência de dados via API
- Interface moderna e responsiva

## 🚀 Tecnologias Utilizadas
- React + Vite
- TypeScript
- TailwindCSS (ou outra tecnologia usada no estilo)
- React DnD para arrastar e soltar
- Fetch API para comunicação com backend

## ⚙️ Instalação e Uso

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/react-kanban.git
   cd react-kanban
   ```

2. **Instale as dependências**

```bash
npm install
````

3. **Configure as variáveis de ambiente**
Crie um arquivo .env e adicione:

```env
VITE_API_URL=http://localhost:3000
```

3. **Inicie o projeto**

```bash
npm run dev
```
O app estará disponível em http://localhost:5173

## 📢 Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests! 😊


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
