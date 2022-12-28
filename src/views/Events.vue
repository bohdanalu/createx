<template>
  <div class="events-page">
    <section class="events">
      <div class="container">
        <h2 class="events__title title">Our events</h2>
        <h3 class="events__subtitle subtitle mb">
          Lectures, workshops & master-classes
        </h3>
        <div class="events__toolbar">
          <label class="events__label" for="events_theame"
            >Events category
            <select
              class="events__select"
              name="events_theame"
              id="events_theame"
            >
              <option value="marketing">All theme</option>
              <option value="managment">Manadgment</option>
              <option value="marketing">Marketing</option>
              <option value="managment">Manadgment</option>
            </select>
          </label>

          <label class="events__label" for="events_age"
            >Sort by
            <select class="events__select" name="events_age" id="events_age">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </label>

          <label class="events__label" for="quantity"
            >Show
            <input
              v-bind:value="9"
              class="events__num"
              id="quantity"
              name="quantity"
              type="number"
              min="1"
            />
            <span>events per page</span>
          </label>
          <div class="search-wrap">
            <label
              class="events__label events__label--search"
              for="search_event"
            >
            </label>
            <input
              class="events__search search"
              type="search"
              name="serch_event"
              id="search_event"
              placeholder="Search blog..."
            />
            <button class="btn-search"></button>
          </div>

          <div class="events__btns-wrap">
            <button
              class="events__toolbar-btn events__toolbar-btn--list _active"
              @click="addClass"
            ></button>
            <button
              class="events__toolbar-btn events__toolbar-btn--grid"
              @click="addClass"
            ></button>
          </div>
        </div>
        <div class="events__list">
          <EventCard
            v-if="(eventCards.length = 9)"
            v-for="card in eventCards"
            :key="card.id"
            :event_data="card"
          />
        </div>
        <div class="pagging">
          <a href="" class="pagging__arrow"></a>
          <ul class="pagging__list">
            <li>
              <a href="" class="pagging__item _active">1</a>
            </li>
            <li>
              <a href="" class="pagging__item">2</a>
            </li>
            <li>
              <a href="" class="pagging__item">3</a>
            </li>
            <li>
              <a href="" class="pagging__item">4</a>
            </li>
          </ul>
          <a href="" class="pagging__arrow"></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";

export default {
  components: { EventCard },
  data() {
    return {
      value: 9,
      eventCards: [
        {
          id: "evc1",
          data: {
            date: "05",
            mounth: "August",
            hour: "11.00 - 14.00",
          },
          title:
            "Formation of the organizational structure of the company in the face of uncertainty.",
          events: "Onine master-class",
          btn: "View more",
        },
        {
          id: "evc2",
          data: {
            date: "24",
            mounth: "July",
            hour: "11.00 - 12.30",
          },
          title: "Building a customer service department. Best Practices.",
          events: "Onine lecture",
          btn: "View more",
        },
        {
          id: "evc3",
          data: {
            date: "16",
            mounth: "July",
            hour: "10.00 - 13.00",
          },
          title:
            "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          events: "Onine master-class",
          btn: "View more",
        },
        {
          id: "evc4",
          data: {
            date: "10",
            mounth: "July",
            hour: "10.00 - 12.30",
          },
          title:
            "Find and evaluate: search and assessment tools for candidates.",
          events: "Onine workshop",
          btn: "View more",
        },
        {
          id: "evc5",
          data: {
            date: "26",
            mounth: "June",
            hour: "15.00 - 19.00",
          },
          title:
            "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
          events: "Onine master-class",
          btn: "View more",
        },
        {
          id: "evc6",
          data: {
            date: "15",
            mounth: "June",
            hour: "10.00 - 12.30",
          },
          title:
            "Marketing or growth hacking: main differences and what business needs.",
          events: "Onine lecture",
          btn: "View more",
        },
        {
          id: "evc7",
          data: {
            date: "02",
            mounth: "June",
            hour: "15.00 - 19.00",
          },
          title:
            "How to brief a client and present your design to approve it from the first show.",
          events: "Onine lecture",
          btn: "View more",
        },
        {
          id: "evc8",
          data: {
            date: "15",
            mounth: "June",
            hour: "10.00 - 12.30",
          },
          title:
            "Marketing or growth hacking: main differences and what business needs.",
          events: "Onine lecture",
          btn: "View more",
        },
        {
          id: "evc9",
          data: {
            date: "29",
            mounth: "May",
            hour: "15.00 - 19.00",
          },
          title: "Who is a project manager and do I want to be PM?",
          events: "Onine lecture",
          btn: "View more",
        },
      ],
    };
  },

  methods: {
    addClass(e) {
      const btns = document.querySelectorAll(".events__toolbar-btn");
      for (const item of btns) {
        item.classList.remove("_active");
      }
      e.target.classList.add("_active");
      const cards = document.querySelectorAll(".event-card");
      for (const card of cards) {
        if (e.target.classList.contains("events__toolbar-btn--list")) {
          card.classList.remove("event-card--vertical");
          card.classList.add("event-card--gorisontal");
        }
        if (e.target.classList.contains("events__toolbar-btn--grid")) {
          card.classList.remove("event-card--gorisontal");
          card.classList.add("event-card--vertical");
        }
      }
    },
  },

  mounted() {
    const cards = document.querySelectorAll(".event-card");
    for (const card of cards) {
      card.classList.add("event-card--gorisontal");
    }
  },
};
</script>
<style lang="scss">
@import "../assets/styles/main.scss";

.events {
  padding: 80px 0;
  text-align: center;

  @include mediaMin(768px) {
    padding: 152px 0 180px;
  }

  // .events__title

  &__title {
  }

  // .events__subtitle

  &__subtitle {
  }

  // .events__toolbar

  &__toolbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 58px;
    @include mediaMin(1320px) {
      flex-wrap: nowrap;
    }
  }

  // .events__label

  &__label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    color: $gray-800;
    span {
      font-size: 14px;
      color: $gray-700;
    }

    &--search {
      width: 0;
    }
  }

  // .events__select

  &__select,
  &__num {
    padding: 11px 16px 12px;
    color: $gray-800;
    border: 1px solid $gray-300;
    border-radius: 4px;
    outline: transparent;
  }

  &__select {
    width: 160px;
    appearance: none;
    & option {
      padding: 11px 16px 12px;
    }
  }

  &__num {
    width: 72px;
    &::-webkit-inner-spin-button {
      background-color: transparent;
    }
  }

  // .events__search

  &__search {
    width: 282px;
    border: 1px solid $gray-300;
    padding: 11px 16px 12px;

    &::placeholder {
      color: $gray-600;
    }

    @include mediaMax(768px) {
      display: none;
    }
  }

  &__btns-wrap {
    display: none;
    @include mediaMin(450px) {
      display: flex;
      gap: 12px;
    }
  }

  &__toolbar-btn {
    width: 20px;
    height: 20px;
    border-color: transparent;
    outline-color: transparent;
    background-color: transparent;

    &--list {
      background: url(../assets/images/list_btn.svg);
      background-position: no-repeat;
      background-size: auto;
      background-position: center;
      &:hover,
      &._active {
        background: url(../assets/images/list_btn_primry.svg);
        background-position: no-repeat;
        background-size: auto;
        background-position: center;
      }
    }
    &--grid {
      background: url(../assets/images/grid_btn.svg);
      background-position: no-repeat;
      background-size: auto;
      background-position: center;
      &:hover,
      &._active {
        background: url(../assets/images/grid_btn_primary.svg);
        background-position: no-repeat;
        background-size: auto;
        background-position: center;
      }
    }
  }
  // .events__list

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
}
.pagging {
  margin-top: 80px;
  justify-content: center;
  display: flex;
  gap: 20px;
  // .pagging__arrow

  &__arrow {
    position: relative;
    &:last-child {
      &::after {
        position: absolute;
        content: url(../assets/images/icons/arrow-right.svg);
        width: 24px;
        top: 25%;
      }
    }
  }

  // .pagging__list

  &__list {
    display: flex;
    gap: 20px;
  }

  // .pagging__item

  &__item {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-800;

    &._active {
      color: $primary;
    }
  }
}
</style>
