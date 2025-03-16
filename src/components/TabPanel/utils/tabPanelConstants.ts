import {
  SiVite,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiEslint,
  SiPrettier,
  SiGit,
  SiReactquery,
  SiJest,
  SiTestinglibrary,
} from 'react-icons/si'
import { GiBearFace } from 'react-icons/gi'
import type { IconType } from 'react-icons'

interface Technology {
  name: string
  description: string
  docUrl: string
  Icon: IconType
}

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'Vite',
    description: 'Lightning fast build tool',
    docUrl: 'https://vitejs.dev/guide/',
    Icon: SiVite,
  },
  {
    name: 'React',
    description: 'UI component library',
    docUrl: 'https://react.dev/learn',
    Icon: SiReact,
  },
  {
    name: 'TypeScript',
    description: 'Type-safe JavaScript',
    docUrl: 'https://www.typescriptlang.org/docs/',
    Icon: SiTypescript,
  },
  {
    name: 'TailwindCSS',
    description: 'Utility-first CSS framework',
    docUrl: 'https://tailwindcss.com/docs',
    Icon: SiTailwindcss,
  },
  {
    name: 'MUI',
    description: 'Material Design components',
    docUrl: 'https://mui.com/material-ui/getting-started/',
    Icon: SiMui,
  },
  {
    name: 'ESLint',
    description: 'Code linting',
    docUrl: 'https://eslint.org/docs/latest/',
    Icon: SiEslint,
  },
  {
    name: 'Prettier',
    description: 'Code formatting',
    docUrl: 'https://prettier.io/docs/en/',
    Icon: SiPrettier,
  },
  {
    name: 'Husky',
    description: 'Git hooks',
    docUrl: 'https://typicode.github.io/husky/',
    Icon: SiGit,
  },
  {
    name: 'Zustand',
    description: 'State management',
    docUrl: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
    Icon: GiBearFace,
  },
  {
    name: 'React Query',
    description: 'Data fetching',
    docUrl: 'https://tanstack.com/query/latest/docs/react/overview',
    Icon: SiReactquery,
  },
  {
    name: 'Jest',
    description: 'Testing framework',
    docUrl: 'https://jestjs.io/docs/getting-started',
    Icon: SiJest,
  },
  {
    name: 'React Testing Library',
    description: 'Component testing',
    docUrl: 'https://testing-library.com/docs/react-testing-library/intro/',
    Icon: SiTestinglibrary,
  },
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
