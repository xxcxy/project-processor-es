const REGEX = {
  URL: /^(http(s?):\/\/)?(www\.)?[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,15})+(\:[0-9]{2,5})?(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=;]*)?$/ // eslint-disable-line
}

const PROJECT_STATUS = {
  DRAFT: 'draft',
  IN_REVIEW: 'in_review',
  REVIEWED: 'reviewed',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  PAUSED: 'paused',
  CANCELLED: 'cancelled'
}

const RESOURCES = {
  PROJECT: 'project',
  PROJECT_TEMPLATE: 'project.template',
  PROJECT_TYPE: 'project.type',
  ORG_CONFIG: 'project.orgConfig',
  FORM_VERSION: 'project.form.version',
  FORM_REVISION: 'project.form.revision',
  PRICE_CONFIG_VERSION: 'project.priceConfig.version',
  PRICE_CONFIG_REVISION: 'project.priceConfig.revision',
  PLAN_CONFIG_VERSION: 'project.planConfig.version',
  PLAN_CONFIG_REVISION: 'project.planConfig.revision',
  PRODUCT_TEMPLATE: 'product.template',
  PRODUCT_CATEGORY: 'product.category',
  ATTACHMENT: 'attachment',
  PHASE: 'phase',
  PROJECT_MEMBER: 'project.member',
  PHASE_PRODUCT: 'phase.product',
  TIMELINE: 'timeline',
  MILESTONE: 'milestone',
  MILESTONE_TEMPLATE: 'milestone.template',
  PROJECT_MEMBER_INVITE: 'project.member.invite'
}

const TIMELINE_REFERENCES = {
  PROJECT: 'project',
  PHASE: 'phase',
  PRODUCT: 'product'
}

const INVITE_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REFUSED: 'refused',
  REQUESTED: 'requested',
  REQUEST_REJECTED: 'request_rejected',
  REQUEST_APPROVED: 'request_approved',
  CANCELED: 'canceled'
}

const PROJECT_MEMBER_ROLE = {
  MANAGER: 'manager',
  OBSERVER: 'observer',
  CUSTOMER: 'customer',
  COPILOT: 'copilot',
  ACCOUNT_MANAGER: 'account_manager',
  PROGRAM_MANAGER: 'program_manager',
  ACCOUNT_EXECUTIVE: 'account_executive',
  SOLUTION_ARCHITECT: 'solution_architect',
  PROJECT_MANAGER: 'project_manager'
}

const MILESTONE_TEMPLATE_REFERENCES = {
  PRODUCT_TEMPLATE: 'productTemplate'
}

module.exports = {
  RESOURCES,
  REGEX,
  PROJECT_STATUS,
  TIMELINE_REFERENCES,
  INVITE_STATUS,
  PROJECT_MEMBER_ROLE,
  MILESTONE_TEMPLATE_REFERENCES
}
