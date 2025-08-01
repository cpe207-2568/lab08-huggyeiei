import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";
import { Sidebar } from "./components/Sidebar";
import { type TaskCardProps } from "./libs/types";

function App() {
  const TaskCards: TaskCardProps[] = [
    { id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false },
    { id: 2, title: "Write code", description: "Finish project for class", isDone: false },
    { id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false }
  ];

  return (
    
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
       {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Naphat" type="student" />
        
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
              {/* input ด้านบน*/}
              <TaskInput />
              
              {/* Card รายการ */}
              {TaskCards.map((Card) => (
                <Task key={Card.id} {...Card}/>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Naphat Chitcharoen" studentId="670610686" />
    </div>
  );
}

export default App;