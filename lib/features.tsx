import {
  WorkflowIcon,
  VersionIcon,
  SelectIcon,
  AiIcon,
  SearchIcon,
  SkillIcon
} from '@/components/icon'

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: <WorkflowIcon />,
    title: '统一工作流',
    description: '把方案、PRD、原型和标注放回同一条工作流，不再依赖碎片化工具跳转。'
  },
  {
    icon: <VersionIcon />,
    title: '版本与上下文',
    description: '默认保留版本与上下文，适合高频试错、回滚和团队评审。'
  },
  {
    icon: <SelectIcon />,
    title: '灵活元素选择',
    description:
      '光标悬停或框选即可精准识别页面元素与区域，支持嵌套定位与批量选取，标注操作更高效。'
  },
  {
    icon: <AiIcon />,
    title: '本地模型自由配置',
    description: '自由接入本地大模型，自定义 API 端点与模型参数。数据不出域，无需经过第三方中间商。'
  },
  {
    icon: <SearchIcon />,
    title: '资料智能检索',
    description: '已有知识内容一键拖拽导入，自动分块构建知识图谱，实现智能语义检索。'
  },
  {
    icon: <SkillIcon />,
    title: '专属 Skill 系统',
    description: '内置产品工作专属 Skill，可连接下载社区其它 Skill，按需扩展工作流能力。'
  }
]
