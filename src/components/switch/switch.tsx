import { Component, h, Element, State } from '@stencil/core/internal';
import bootstrapCss from '../../assets/bootstrap.min.css';

@Component({
  tag: 'rf-switch',
  shadow: true,
})
export class Switch {
  @Element() element: HTMLElement;

  componentDidLoad() {
    const shadowRoot = this.element.shadowRoot;
    if (shadowRoot) {
      const style = document.createElement('style');
      style.textContent = bootstrapCss;
      shadowRoot.appendChild(style);
    }
  }

  inputEl: HTMLInputElement;
  @State() label = 'on';

  switchToggle() {
    if (this.inputEl.checked) {
      this.label = 'on';
    } else {
      this.label = 'off';
    }
  }
  render() {
    return (
      <div class="container">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked ref={el => (this.inputEl = el)} onChange={this.switchToggle.bind(this)}></input>
          <label class="form-check-label">{this.label}</label>
        </div>
      </div>
    );
  }
}
