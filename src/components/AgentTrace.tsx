import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserClock } from "@fortawesome/free-solid-svg-icons";

interface AgentTraceProps {
  title: string;
  caption: string;
  steps: readonly string[];
  waiting: string;
}

/**
 * Firma visual del sitio: la corrida del agente de búsqueda de empleo,
 * paso por paso, que termina esperando la revisión de una persona.
 */
export function AgentTrace({ title, caption, steps, waiting }: AgentTraceProps) {
  const delay = (i: number) => ({ animationDelay: `${300 + i * 450}ms` });

  return (
    <figure className='w-full overflow-hidden rounded-xl border border-console-line bg-console text-console-text shadow-[0_24px_60px_-20px_rgb(15_26_28/0.45)]'>
      <div className='flex items-center justify-between border-b border-console-line px-4 py-3'>
        <span className='font-mono text-xs text-console-text/70'>
          <span className='text-[#8fa3ff]'>claude</span> › {title}
        </span>
        <span className='flex gap-1.5' aria-hidden='true'>
          <span className='h-2 w-2 rounded-full bg-console-line' />
          <span className='h-2 w-2 rounded-full bg-console-line' />
          <span className='h-2 w-2 rounded-full bg-console-line' />
        </span>
      </div>

      <ol className='flex flex-col gap-1 p-4 font-mono text-[13px] leading-relaxed sm:p-5'>
        {steps.map((step, i) => (
          <li key={step} className='trace-step flex items-start gap-3' style={delay(i)}>
            <span className='mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[#1d4d3b] text-[#7fe0b4]'>
              <FontAwesomeIcon icon={faCheck} className='h-2.5 w-2.5' />
            </span>
            <span>{step}</span>
          </li>
        ))}
        <li
          className='trace-step mt-2 flex items-start gap-3 rounded-md border border-[#5c4512] bg-[#2a2210] px-3 py-2 text-[#f5cf7a]'
          style={delay(steps.length)}
        >
          <FontAwesomeIcon icon={faUserClock} className='trace-pulse mt-[3px] h-3.5 w-3.5 shrink-0' />
          <span>{waiting}</span>
        </li>
      </ol>

      <figcaption className='border-t border-console-line px-4 py-3 text-xs text-console-text/60 sm:px-5'>
        {caption}
      </figcaption>
    </figure>
  );
}
