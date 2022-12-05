import { Project } from './projects.component';

declare module '*.json' {
  const projects: Project[];
  export default projects;
}
