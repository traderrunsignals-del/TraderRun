type CourseContentProps = {
  items: string[]
}

export default function CourseContent({
  items,
}: CourseContentProps) {
  return (
    <div className="mt-10 rounded-2xl border p-6">

      <h2 className="text-2xl font-semibold">
        🎯 En este módulo aprenderás
      </h2>

      <ul className="mt-6 space-y-4">

        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <span className="text-green-500 text-lg">
              ✔
            </span>

            <span>
              {item}
            </span>

          </li>
        ))}

      </ul>

    </div>
  )
}