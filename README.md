This project demonstrates common mistakes and best practices when using React.memo to optimize component rendering performance.

Mistake 1: NoMemo (Forgot to wrap component in React.memo) - Wrap Greeting component in React.memo
Mistake 2: MemoArg (Passed wrong arg to React.memo) - Pass Greeting component as arg instead of string
Mistake 3: WrongCompare (Used wrong compare function) - Import and use custom compare function instead of default
Mistake 4: MemoInline (Tried to memo inline function) - Move arrow function to its own component
Mistake 5: MemoHOC (Tried to memo HOC) - Memo wrapped component instead of HOC
Mistake 6: MemoClass (Tried to memo class component) - Convert to function component first
Mistake 7: MemoPure (Assumed memo makes component pure) - Remove external state mutation
Mistake 8: MemoAll (Memoed all components) - Only memo components conditionally
Mistake 9: NoRenderCheck (Forgot to check render calls) - Add console logs to check renders
Mistake 10: WrongUpdates (Update wrong prop to test) - Update prop that component depends on
