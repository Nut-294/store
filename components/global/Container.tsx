import { cn } from "@/lib/utils";

function Container({
  childern,
  clasName,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", clasName)}>
      {childern}
    </div>
  );
}
export default Container;
