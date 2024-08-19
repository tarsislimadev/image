import { HTML } from '@brtmvdl/frontend'

export class FormComponent extends HTML {
  state = { action: null }

  constructor({ action = null } = {}) {
    super()
    this.state.action = action
  }

  onCreate() {
    this.action(this.state.action)
  }

  getTagName() { return 'form' }

  action(action = null) {
    if (action)
      this.setAttr('action', action)
  }
}
