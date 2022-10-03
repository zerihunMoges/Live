import React from 'react'
import './match.css'
function Match() {
  return (
    <div class="match">
      <div class="match-header">
        <div class="match-status">Live</div>
        <div class="match-tournament">
          <img src="https://assets.codepen.io/285131/pl-logo.svg" />
          English Premier League
        </div>
        <div class="match-actions">
          {/* <button class="btn-icon">
            <i class="material-icons-outlined">grade</i>
          </button>
          <button class="btn-icon">
            <i class="material-icons-outlined">add_alert</i>
          </button> */}
        </div>
      </div>
      <div class="match-content">
        <div class="column">
          <div class="team team--home">
            <div class="team-logo">
              <img src="https://assets.codepen.io/285131/chelsea.svg" />
            </div>
            <h2 class="team-name">Chelsea</h2>
          </div>
        </div>
        <div class="column">
          <div class="match-details">
            <div class="match-date">
              3 May at <strong>17:30</strong>
            </div>
            <div class="match-score">
              <span class="match-score-number match-score-number--leading">
                3
              </span>
              <span class="match-score-divider">:</span>
              <span class="match-score-number">1</span>
            </div>
            <div class="match-time-lapsed">72'</div>
            <div class="match-referee">
              Referee: <strong>Mike dean</strong>
            </div>
            {/* <div class="match-bet-options">
              <button class="match-bet-option">1.48</button>
              <button class="match-bet-option">7.84</button>
              <button class="match-bet-option">3.24</button>
            </div>
            <button class="match-bet-place">Place a bet</button> */}
          </div>
        </div>
        <div class="column">
          <div class="team team--away">
            <div class="team-logo">
              <img src="https://resources.premierleague.com/premierleague/badges/t1.svg" />
            </div>
            <h2 class="team-name"> Man Utd</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match
