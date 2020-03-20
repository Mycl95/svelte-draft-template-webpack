import Link from "./component/Link";

export interface IAppProps
{
    name: string;
}

export default function App(props: IAppProps)
{
    const { name } = props;

    <main>
        <h1>Hello {name}!</h1>
        <p>
            Visit the <Link url="https://svelte.dev/tutorial" text="Svelte tutorial" /> to learn how to build Svelte apps and the <Link url={"https://github.com/mistlog/svelte-draft-docs"} text={"svelte-draft Docs"}/> to learn how to do it in <Link url={"https://github.com/mistlog/svelte-draft"} text={"svelte-draft"}/>.
        </p>
        <p>A complete svelte-draft version of the tutorial is also available at <Link url={"https://github.com/mistlog/svelte-draft-tutorial"} text={"mistlog/svelte-draft-tutorial"}/> on GitHub</p>
        <p></p>
    </main>
}