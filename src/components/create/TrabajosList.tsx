import { MdWork } from "react-icons/md"
import type { Trabajo, Trabajos } from "../../utils/definitions.ts"
import { BsCalendar2DateFill } from "react-icons/bs"

export default function TrabajosList({ trabajos }: Trabajos) {
  return (
    <section>
      <h2 className="text-2xl text-violet-400 font-semibold mb-4 flex gap-4 items-center">
        <MdWork /> Опыт работы
      </h2>
      <ul className="list-none flex flex-col gap-4 mb-8 mt-4">
        {trabajos.map((trabajo: Trabajo) => (
          <li key={trabajo.trabajo}>
            <h3 className=" text-xl">
              {trabajo.trabajo} | {trabajo.empresa}
            </h3>
            <h4 className="flex gap-2 items-center">
              <BsCalendar2DateFill /> {trabajo.fecha}
            </h4>
            <p>{trabajo.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
