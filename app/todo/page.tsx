import ImageUpload from "../../components/partials/ImageUpload";
import Todo from "../../components/partials/Todo";

export default function Page() {
  return (
    <main>
      <h1>My todos</h1>
      <Todo />
      <ImageUpload />
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}