// app/u/[name]/page.tsx
export default function Page({ params }: { params: { name: string } }) {
  return <>hi, {params.name}</>;
}