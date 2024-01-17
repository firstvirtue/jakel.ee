import { useEffect, useState } from "react"

function sleep(sec: number = 1): Promise<void> {
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

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  const randomNumbers: number[] = Array.from({ length: 100 }, generateRandomNumber);
  // let arr = [10, 7, 8, 9, 1, 5, 23, 55, 100, 33, 72, 20, 41];
  let arr = randomNumbers
  const [graph, setGraph] = useState(arr)

  useEffect(()=> {

    // async function quickSort(arr: number[]): Promise<number[]> {
    //   if (arr.length <= 1) {
    //       return arr;
    //   }

    //   await sleep(0.5)
    //   console.log('excutes..')
  
    //   let pivot = arr[0];
    //   let left: number[] = [];
    //   let right: number[] = [];
  
    //   for (let i = 1; i < arr.length; i++) {
    //       if (arr[i] < pivot) {
    //           left.push(arr[i]);
    //       } else {
    //           right.push(arr[i]);
    //       }
    //   }
  
    //   const sortedLeft = await quickSort(left);
    //   const sortedRight = await quickSort(right);

    //   return [...sortedLeft, pivot, ...sortedRight];
    // }

    async function partition(arr: number[], low: number, high: number): Promise<number> {
      let pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
          if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
              await sleep(0.1);
              setGraph([...arr])
          }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      await sleep(0.1);
      setGraph([...arr])
      return i + 1;
    }
    
    async function quickSort(arr: number[], low: number, high: number): Promise<void> {
        if (low < high) {
            await sleep(0.1);
            // console.log('partition pivot', arr)

            const pi = await partition(arr, low, high);
    
            await sleep(0.1);
            // console.log('quick sort recursion', arr)

            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
    }
  
    
    console.log(arr);
    // const sortedArray = quickSort(arr);

    (async () => {
      // const sortedArray = await quickSort(arr);
      // console.log(sortedArray);
      await quickSort(arr, 0, arr.length - 1);
      // setGraph([...arr])
      console.log('done')
    })()

  }, [])

  useEffect(() => {
    // console.log(graph)
  }, [graph])

  return (
    <>
    <div className="flex gap-2 items-end pb-8 pt-28">
      {graph?.map((x, i) => {
        return <div key={i} className="bg-slate-300"
        style={{
          'height': `${x}px`,
          'width': '10px',
          'transition': 'all 0.34s ease'
        }}
        ></div>
      })}
    </div>
    </>
  )
}