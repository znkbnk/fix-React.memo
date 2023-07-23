// Mistake 1: NoMemo
function Greeting({ name }) {
  console.log("Rendering Greeting");
  return <h1>Hello {name}</h1>;
}

// Mistake 2: MemoArg
const MemoizedGreeting = React.memo("Greeting");

// Mistake 3: WrongCompare
function areEqual(prevProps, nextProps) {
  return prevProps === nextProps;
}

const MemoizedGreeting = React.memo(Greeting, areEqual);

// Mistake 4: MemoInline
const MemoizedGreeting = React.memo((name) => {
   return <h1>Hello {name}</h1>;
});

// Mistake 5: MemoHOC
function withLogger(Component) {
  return (props) => {
    console.log("Logging");
    return <Component {...props} />;
  };
}

const MemoizedGreeting = React.memo(withLogger(Greeting));

// Mistake 6: MemoClass
class Greeting extends React.Component {
  render(name) {
    return <h1>Hello {name}</h1>;
  }
}

const MemoizedGreeting = React.memo(Greeting);

// Mistake 7: MemoPure
let count = 0;

const MemoizedButton = React.memo(({ onClick }) => {
  return (
    <button
      onClick={() => {
        count++;
        onClick();
      }}
    >
      Click Me
    </button>
  );
});

// Mistake 8: MemoAll
const App = () => {
  return (
    <React.memo>
      <React.memo>
        <MemoizedGreeting />
      </React.memo>
    </React.memo>
  );
};

// Mistake 9: NoRenderCheck
const MemoizedGreeting = React.memo(Greeting);

// Mistake 10: WrongUpdates
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <MemoizedGreeting name='John' />
      <button onClick={() => setCount((c) => c + 1)}>Update Count</button>
    </>
  );
};
