import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ReactNode, useState } from "react";
type WorkProps = {
  title: string
  img: string
  toolList: {
    id: string
    title: string
  }[]
}
function Work({title, img}: WorkProps) {
  return (
    <div className="max-h-[720px]">
      <p className="text-xl bg-[#00000050] w-fit">{title}</p>
      <div className="">
        <img src={img} alt="" className="h-full" />
      </div>
    </div>
  )
}

function WorkSection() {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(-1)
  const work1 = {
    title: "Multi Step Form",
    img: "/src/assets/Multistepform.png",
    liveUrl: "https://multi-step-form-bice-nu.vercel.app/",
    toolList: [
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      }
    ]
  }
  const work2 = {
    title: "Todos App",
    img: "/src/assets/TodoApp.png",
    liveUrl: "https://todo-app-chayapol-c.vercel.app/",
    toolList: [
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      }
    ]
  }
  const work3 = {
    title: "Result Summary Component",
    img: "/src/assets/results-summary-component.png",
    liveUrl: "https://results-summary-component-murex.vercel.app/",
    toolList: [
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      },
      {
        id: crypto.randomUUID(),
        title: "skill1"
      }
    ]
  }
  const onShowWorkDetail = (index: number, item: ReactNode) => {
    setSelectedWorkIndex(index)
  }

  return (
    <section className="screen-section" id="work-section">
      <h2 className="section-title">
        Works
      </h2>
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        onClickItem={onShowWorkDetail}
        showStatus={false}
        showArrows={false}
        useKeyboardArrows={true}
        width="80%"
      >
        <Work {...work1} />
        <Work {...work2} />
        <Work {...work3} />
      </Carousel>

      {selectedWorkIndex}
    </section>
  )
}

export { WorkSection }
