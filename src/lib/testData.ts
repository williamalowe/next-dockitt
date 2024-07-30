export const exampleTasks = [
  {
    id: "001",
    task: "Implement lightmode/darkmode",
    tag: "feat",
    description: "Implement lightmode/darkmode toggle + switch component.",
    priority: "high",
    status: "completed",
  },
  {
    id: "002",
    task: "Resolve new-task-form overflow issue",
    tag: "fix",
    description: "new-task-from component currently overflows on x-axis on sm resolutions.",
    priority: "medium",
    status: "under review",
  },
  {
    id: "003",
    task: "Implement demo data",
    tag: "test",
    description: "Implement test data to be loaded if no tasks are in storage",
    priority: "high",
    status: "in progress",
  },
  {
    id: "004",
    task: "Refactor new-task-form",
    tag: "refactor",
    description: "Refactor new-task-form for resusability, and as a dropdown form",
    priority: "medium",
    status: "backlog",
  },
  {
    id: "005",
    task: "Implement mobile support",
    tag: "styles",
    description: "Ensure that application has appropriate stylings to support sm resolutions.",
    priority: "critical",
    status: "completed",
  },
  {
    id: "006",
    task: "Investigate drag-drop implementation",
    tag: "docs",
    description: "Generate spike doc regarding feasibility for beautiful-dnd library implementation.",
    priority: "low",
    status: "backlog",
  },
  {
    id: "007",
    task: "Adjust darkmode color-scheme",
    tag: "style",
    description: "Adjust darkmode colors to enhance usability and component clarity.",
    priority: "low",
    status: "cancelled",
  },
  {
    id: "008",
    task: "Resolve sidebar sizing issue.",
    tag: "bug",
    description: "Sidebar incorrectly resizing on sm resolutions.",
    priority: "high",
    status: "completed",
  },
  {
    id: "009",
    task: "Implement dashboard graph components",
    tag: "feat",
    description: "Investigate and implement graph libraries appropriate for general dashboard overview.",
    priority: "medium",
    status: "under review",
  },
  {
    id: "010",
    task: "Test task-context functions across all elements",
    tag: "test",
    description: "Ensure that task-contect functions are working as intended across all routes + componenets.",
    priority: "medium",
    status: "in progress",
  },
] as const;