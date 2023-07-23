// Mistake 1: NoMemo - Fixed
const Greeting = ({ name }) => {
  console.log("Rendering Greeting");
  return <h1>Hello {name}</h1>;
};

const MemoizedGreeting = React.memo(Greeting);

// Mistake 2: MemoArg - Fixed
const MemoizedGreeting = React.memo(Greeting);

// Mistake 3: WrongCompare - Fixed
function areEqual(prevProps, nextProps) {
  return prevProps.name === nextProps.name;
}

const MemoizedGreeting = React.memo(Greeting, areEqual);

// Mistake 4: MemoInline - Fixed
const GreetingComponent = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

const MemoizedGreeting = React.memo(GreetingComponent);

// Mistake 5: MemoHOC - Fixed
const MemoizedGreeting = React.memo(Greeting);

// Mistake 6: MemoClass - Fixed
const Greeting = React.memo(({ name }) => {
  return <h1>Hello {name}</h1>;
});

// Mistake 7: MemoPure - Fixed
const MemoizedButton = React.memo(({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return <button onClick={handleClick}>Click Me</button>;
});

// Mistake 8: MemoAll - Fixed
const App = () => {
  return (
    <>
      <MemoizedGreeting />
    </>
  );
};

// Mistake 9: NoRenderCheck - Fixed
const MemoizedGreeting = React.memo(Greeting);

const App = () => {
  return <MemoizedGreeting name='John' />;
};

// Mistake 10: WrongUpdates - Fixed
const App = () => {
  const [name, setName] = useState("John");

  return (
    <>
      <MemoizedGreeting name={name} />
      <button onClick={() => setName("Sam")}>Update Name</button>
    </>
  );
};
