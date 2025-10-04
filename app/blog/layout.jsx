import Header from "@/components/Header";

export const metadata = {
  title: "Blog",
  description: "Read the latest articles and insights from our blog.",
};
export default function BlogLayout({ children }) {
  return (
    <>
      <Header />
      <section className="py-5 sm:pb-10">{children}</section>
    </>
  );
}
