import ThemeSwitch from "./website/context/theme/ThemeSwitch";
import Button from "./website/ui/buttons/buttonMain";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

          <Button label="Large" variant="dark" withCheckbox={true} />
          <Button label="Large" variant="dark" disabled={true} withCheckbox={true} />
          <Button label="Large" variant="light" withCheckbox={true} />
          <Button label="Large" variant="light" disabled={true} withCheckbox={true} />
          <ThemeSwitch />
      </div>
  );
}
