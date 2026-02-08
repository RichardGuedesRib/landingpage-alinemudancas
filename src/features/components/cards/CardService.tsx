import type { ReactNode } from "react"

type CardServiceProps = {
    img: string,
    title: string,
    text: ReactNode
}
export default function CardService(props: CardServiceProps) {
    return(
        <div className="flex flex-col md:w-[290px] gap-[16px] md:gap-[0px]">
          <div className="flex justify-center items-center gap-[10px]">
            <img src={props.img} alt="" className="w-[32px] h-[32px]" />
            <p className="text-[18px] font-bold tracking-[0.13px]">{props.title}</p>
          </div>
          <p className="text-[16px] text-center tracking-[0.2px]">
            {props.text}
          </p>
        </div>
      )
}