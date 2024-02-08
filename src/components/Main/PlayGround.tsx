import { useEffect, useState } from "react"

function sleep(sec: number = 0.08): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve()
      } catch(error) {
        reject(error)
      }
      
    }, sec * 1000)
  })
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * (100 - 20)) + 20;
}

class TaskQueue {
  private queue: (() => void)[];
  private interval: number;
  private timer: NodeJS.Timeout | null;

  constructor(interval: number = 1000) {
      this.queue = [];
      this.interval = interval;
      this.timer = null;
  }

  start(): void {
      if (this.timer === null) {
          this.timer = setInterval(() => {
              if (this.queue.length > 0) {
                  const task = this.queue.shift();
                  task?.();
              }
          }, this.interval);
      }
  }

  stop(): void {
      if (this.timer !== null) {
          clearInterval(this.timer);
          this.timer = null;
      }
  }

  addTask(task: () => void): void {
      this.queue.push(task);
  }
}

export default function PlayGround() {

  
  const [count, setCount] = useState(0)
  const [graph, setGraph] = useState<number[]>()
  // [TODO] useMemo

  useEffect(()=> {

    let randomNumbers: number[] = Array.from({ length: 100 }, generateRandomNumber);
    setGraph(randomNumbers)

    let stopExecution = false;

    async function partition(arr: number[], low: number, high: number): Promise<number> {
      
      let pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (stopExecution) return -1; // Check stop condition

        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            await sleep();
            setGraph([...arr])
        }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      await sleep();
      setGraph([...arr])
      return i + 1;
    }
    
    async function quickSort(arr: number[], low: number, high: number): Promise<void> {
        if (low < high) {
          if (stopExecution) return; // Check stop condition

          await sleep();
          // console.log('partition pivot', arr)

          const pi = await partition(arr, low, high);
  
          await sleep();
          // console.log('quick sort recursion', arr)

          await quickSort(arr, low, pi - 1);
          await quickSort(arr, pi + 1, high);
        }
    }

    (async () => {
      
      await quickSort(randomNumbers, 0, randomNumbers.length - 1);
      // console.log('done')
      setCount(count + 1)
    })()

    return () => {
      stopExecution = true
    }

  }, [count])

  useEffect(() => {
    console.log('count: ', count)
  }, [count])

  return (
    <>
      <div className="relative mt-14 pb-8 pt-28 w-full h-200 overflow-hidden">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 justify-center items-end w-full">
          {graph?.map((x, i) => {
            return <div key={i} className="bg-slate-300"
            style={{
              'height': `${x * 0.8}px`,
              'width': `${1 / graph.length * 100}%`,
              'minWidth': '8px',
              'maxWidth': '10px',
              'transition': 'all 0.34s ease',
            }}
            ></div>
          })}
        </div>
        <strong className="block absolute bottom-0 right-0 text-slate-400 opacity-50 text-right mt-3">Quick Sort</strong>
    </div>
    </>
  )
}