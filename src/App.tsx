import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-96 border border-red-500 p-10">
          <Button>Click</Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
