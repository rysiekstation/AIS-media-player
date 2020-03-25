import { LitElement, html, css } from 'lit-element';

import './groupItem';
import './button';


class MiniMediaPlayerGroupList extends LitElement {
  static get properties() {
    return {
      entities: {},
      player: {},
      visible: Boolean,
    };
  }

  get group() {
    return this.player.group;
  }

  get master() {
    return this.player.master;
  }

  get isMaster() {
    return this.player.isMaster;
  }

  get isGrouped() {
    return this.player.isGrouped;
  }

  handleGroupChange(ev) {
    const { entity, checked } = ev.detail;
    this.player.handleGroupChange(ev, entity, checked);
  }

  render() {
    if (!this.visible) return html``;
    const { group, isMaster, isGrouped } = this;
    const { id } = this.player;
    return html`
      <div class='mmp-group-list'>
        <span class='mmp-group-list__title'>GRUPA ODTWARZACZY</span>
        ${this.entities.map(item => this.renderItem(item, id))}
        <div class='mmp-group-list__buttons'>
          <mmp-button raised ?disabled=${!isGrouped}
            @click=${e => this.player.handleGroupChange(e, id, false)}>
            <span>Opuść</span>
          </mmp-button>
          ${isGrouped && isMaster ? html`
            <mmp-button raised
              @click=${e => this.player.handleGroupChange(e, group, false)}>
              <span>Rozgrupuj</span>
            </mmp-button>
          ` : html``}
          <mmp-button raised ?disabled=${!isMaster}
            @click=${e => this.player.handleGroupChange(e, this.entities.map(item => item.entity_id), true)}>
            <span><svg style="width:24px;height:24px; vertical-align:middle;" viewBox="0 0 24 24">
                    <path fill="#fff" d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
                  </svg> Wszystkie</span>
          </mmp-button>
        </div>
      </div>
    `;
  }

  renderItem(item, id) {
    const itemId = item.entity_id;
    return html`
      <mmp-group-item
        @change=${this.handleGroupChange}
        .item=${item}
        .checked=${itemId === id || this.group.includes(itemId)}
        .disabled=${itemId === id || !this.isMaster}
        .master=${itemId === this.master}
      />`;
  }

  static get styles() {
    return css`
      .mmp-group-list {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        margin-bottom: 8px;
      }
      .mmp-group-list__title {
        font-weight: 500;
        letter-spacing: .1em;
        margin: 8px 0 4px;
        text-transform: uppercase;
      }
      .mmp-group-list__buttons {
        display: flex;
      }
      mmp-button {
        margin: 8px 8px 0 0;
        min-width: 0;
        text-transform: uppercase;
        text-align: center;
        width: 50%;
        --mdc-theme-primary: transparent;
        background: rgba(255,255,255,0.25);
      }
    `;
  }
}

customElements.define('mmp-group-list', MiniMediaPlayerGroupList);
