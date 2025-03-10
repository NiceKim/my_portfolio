import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillBadge } from "@/components/skill-badge"
import type { Skill } from "@/data/skills"

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 bg-muted/50">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 my-4">
          {skill.icon && <skill.icon className="h-7 w-7 text-primary" />}
          <h3 className="text-xl font-bold ml-1">{skill.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 py-2">
          {skill.items.map((item) =>
            item.logo ? (
              <SkillBadge key={item.name} name={item.name} logo={item.logo} color={item.color || "gray"} />
            ) : (
              <Badge
                key={item.name}
                className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/20"
              >
                {item.name}
              </Badge>
            ),
          )}
        </div>
      </CardContent>
    </Card>
  )
}