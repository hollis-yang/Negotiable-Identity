import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface Datum {
  name: string
  value: number
  color: string
}

interface Props {
  data: Datum[]
  centerValue: string | number
  centerLabel?: string
  size?: number
}

export default function DonutChart({ data, centerValue, centerLabel = 'Total Videos', size = 220 }: Props) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="62%"
            outerRadius="92%"
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-3xl font-bold">{centerValue}</div>
        <div className="text-xs text-white/50 mt-1">{centerLabel}</div>
      </div>
    </div>
  )
}
