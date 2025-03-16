export const technologies = [
  { name: 'Vite', description: 'Lightning fast build tool' },
  { name: 'React', description: 'UI component library' },
  { name: 'TypeScript', description: 'Type-safe JavaScript' },
  { name: 'TailwindCSS', description: 'Utility-first CSS framework' },
  { name: 'MUI', description: 'Material Design components' },
  { name: 'ESLint', description: 'Code linting' },
  { name: 'Prettier', description: 'Code formatting' },
  { name: 'Husky', description: 'Git hooks' },
  { name: 'Zustand', description: 'State management' },
  { name: 'React Query', description: 'Data fetching' },
  { name: 'Jest', description: 'Testing framework' },
  { name: 'React Testing Library', description: 'Component testing' },
]

// Sample code snippets
export const ZUSTAND_EXAMPLE = `// store.ts
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useStore`

export const REACT_QUERY_EXAMPLE = `// Example.tsx
import { useQuery } from '@tanstack/react-query'

function TodoList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://api.example.com/todos').then(res => res.json())
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}`
