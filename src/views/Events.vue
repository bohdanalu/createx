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
              @change="filterEventCards($event)"
            >
              <option value="All">All theme</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="HR & Recruting">HR & Recruting</option>
              <option value="Development">Development</option>
            </select>
          </label>

          <label class="events__label" for="events_age"
            >Sort by
            <select
              class="events__select"
              name="events_age"
              id="events_age"
              @change="sortEventCards($event)"
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </label>

          <label class="events__label" for="quantity"
            >Show
            <input
              v-model="value"
              class="events__num"
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              max="filteredEventList.length"
              @change="perPage = value"
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
              class="events__toolbar-btn events__toolbar-btn--list"
              :class="{ _active: true }"
              @click="addClass"
            ></button>
            <button
              class="events__toolbar-btn events__toolbar-btn--grid"
              :class="{ _active: false }"
              @click="addClass"
            ></button>
          </div>
        </div>
        <div class="events__list">
          <EventCard
            :class="{ gorisontal, vertical }"
            v-for="card in displayedEvents"
            :key="card.id"
            :event_data="card"
          />
        </div>
        <nav>
          <ul class="pagination">
            <li class="pagination__page-item">
              <button
                type="button"
                class="pagination__page-link pagination__page-link--prev"
                v-if="page != 1"
                @click="page--"
              ></button>
            </li>
            <li class="pagination__page-item">
              <button
                type="button"
                class="pagination__page-link"
                v-for="pageNumber in pages.slice(page - 1, page + 5)"
                @click="page = pageNumber"
              >
                {{ pageNumber }}
              </button>
            </li>
            <li class="pagination__page-item">
              <button
                type="button"
                @click="page++"
                v-if="page < pages.length"
                class="pagination__page-link pagination__page-link--next"
              ></button>
            </li>
          </ul>
        </nav>
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
      page: 1,
      perPage: 9,
      value: 9,
      pages: [],
      gorisontal: true,
      vertical: false,
      eventCards: [
        {
          id: "evc1",
          data: {
            date: "05",
            month: "August",
            hour: "11.00 - 14.00",
          },
          title:
            "Formation of the organizational structure of the company in the face of uncertainty.",
          event: "Onine master-class",
          category: "Management",
        },
        {
          id: "evc2",
          data: {
            date: "24",
            month: "July",
            hour: "11.00 - 12.30",
          },
          title: "Building a customer service department. Best Practices.",
          event: "Onine lecture",
          category: "Management",
        },
        {
          id: "evc3",
          data: {
            date: "16",
            month: "July",
            hour: "10.00 - 13.00",
          },
          title:
            "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          event: "Onine master-class",
          category: "Design",
        },
        {
          id: "evc4",
          data: {
            date: "10",
            month: "July",
            hour: "10.00 - 12.30",
          },
          title:
            "Find and evaluate: search and assessment tools for candidates.",
          event: "Onine workshop",
          category: "HR & Recruting",
        },
        {
          id: "evc5",
          data: {
            date: "26",
            month: "June",
            hour: "15.00 - 19.00",
          },
          title:
            "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
          event: "Onine master-class",
          category: "Design",
        },
        {
          id: "evc6",
          data: {
            date: "15",
            month: "June",
            hour: "10.00 - 12.30",
          },
          title:
            "Marketing or growth hacking: main differences and what business needs.",
          events: "Onine lecture",
          category: "Marketing",
        },
        {
          id: "evc7",
          data: {
            date: "02",
            month: "June",
            hour: "15.00 - 19.00",
          },
          title:
            "How to brief a client and present your design to approve it from the first show.",
          event: "Onine lecture",
          category: "Development",
        },
        {
          id: "evc8",
          data: {
            date: "15",
            month: "June",
            hour: "10.00 - 12.30",
          },
          title:
            "Marketing or growth hacking: main differences and what business needs.",
          event: "Onine lecture",
          category: "Marketing",
        },
        {
          id: "evc9",
          data: {
            date: "29",
            month: "May",
            hour: "15.00 - 19.00",
          },
          title: "Who is a project manager and do I want to be PM?",
          event: "Onine lecture",
          category: "Management",
        },
        {
          id: "evc1",
          data: {
            date: "05",
            month: "August",
            hour: "11.00 - 14.00",
          },
          title:
            "Formation of the organizational structure of the company in the face of uncertainty.",
          event: "Onine master-class",
          category: "Management",
        },
        {
          id: "evc2",
          data: {
            date: "24",
            month: "July",
            hour: "11.00 - 12.30",
          },
          title: "Building a customer service department. Best Practices.",
          event: "Onine lecture",
          category: "Management",
        },
        {
          id: "evc3",
          data: {
            date: "16",
            month: "July",
            hour: "10.00 - 13.00",
          },
          title:
            "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          event: "Onine master-class",
          category: "Design",
        },
        {
          id: "evc4",
          data: {
            date: "10",
            month: "July",
            hour: "10.00 - 12.30",
          },
          title:
            "Find and evaluate: search and assessment tools for candidates.",
          event: "Onine workshop",
          category: "HR & Recruting",
        },
        {
          id: "evc5",
          data: {
            date: "26",
            month: "June",
            hour: "15.00 - 19.00",
          },
          title:
            "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
          event: "Onine master-class",
          category: "Design",
        },
        {
          id: "evc6",
          data: {
            date: "15",
            month: "June",
            hour: "10.00 - 12.30",
          },
          title:
            "Marketing or growth hacking: main differences and what business needs.",
          events: "Onine lecture",
          category: "Marketing",
        },
        {
          id: "evc7",
          data: {
            date: "02",
            month: "June",
            hour: "15.00 - 19.00",
          },
          title:
            "How to brief a client and present your design to approve it from the first show.",
          event: "Onine lecture",
          category: "Development",
        },
        {
          id: "evc8",
          data: {
            date: "15",
            month: "June",
            hour: "10.00 - 12.30",
          },
          title:
            "Marketing or growth hacking: main differences and what business needs.",
          event: "Onine lecture",
          category: "Marketing",
        },
        {
          id: "evc9",
          data: {
            date: "29",
            month: "May",
            hour: "15.00 - 19.00",
          },
          title: "Who is a project manager and do I want to be PM?",
          event: "Onine lecture",
          category: "Management",
        },
      ],
      filteredEventList: [],
      sortedEventList: [],
    };
  },

  methods: {
    addClass(e) {
      const btns = document.querySelectorAll(".events__toolbar-btn");
      for (const item of btns) {
        item.classList.remove("_active");
      }
      e.target.classList.add("_active");
      if (e.target.classList.contains("events__toolbar-btn--list")) {
        this.vertical = false;
        this.gorisontal = true;
      }
      if (e.target.classList.contains("events__toolbar-btn--grid")) {
        this.gorisontal = false;
        this.vertical = true;
      }
    },

    filterEventCards(el) {
      const selectValue = el.target.value;

      if (selectValue === "All") {
        this.filteredEventList = this.eventCards;
      } else {
        this.filteredEventList = this.eventCards.filter(
          (el) => el.category == selectValue
        );
      }

      const btns = document.querySelectorAll(".events__toolbar-btn");
      const cards = document.querySelectorAll(".event-card");
      for (const card of cards) {
        if (btns[1].classList.contains("_active")) {
          card.classList.remove("gorisontal");
          card.classList.add("vertical");
        }
      }

      return this.filteredEventList;
    },

    sortEventCards(el) {
      let selectValue = el.target.value;

      if (selectValue === "Newest") {
        this.sortedEventList = this.filteredEventList.sort(function (a, b) {
          if (a.data.month > b.data.month && a.data.date > b.data.date) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        this.sortedEventList = this.filteredEventList.sort(function (a, b) {
          if (a.data.month < b.data.month && a.data.date < b.data.date) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    },

    setPages() {
      this.perPage = this.value;
      let numberOfPages = Math.ceil(
        this.filteredEventList.length / this.perPage
      );
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(filteredEventList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;

      return filteredEventList.slice(from, to);
    },

    addPrimaryClass() {
      let listNambersLinks = document.querySelectorAll(
        ".pagination__page-link"
      );
      for (const link of listNambersLinks) {
        if ((link.textContent = this.page)) {
          link.classList.add("_active");
        }
      }
    },
  },

  computed: {
    displayedEvents() {
      return this.paginate(this.filteredEventList);
    },
  },

  watch: {
    filteredEventList() {
      this.setPages();
    },
    value() {
      this.setPages();
    },
    page() {
      this.addPrimaryClass();
    },
  },

  mounted() {
    this.filteredEventList = this.eventCards;
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
    position: relative;

    &::after {
      position: absolute;
      content: url(../assets/images/icons/up-down-select.svg);
      width: 24px;
      height: 24px;
      right: 10px;
      top: 10px;
      z-index: 10;
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

.pagination {
  margin-top: 80px;
  justify-content: center;
  display: flex;
  gap: 10px;

  // .pagination__page-link

  &__page-link {
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-800;
    padding: 0 10px;
    &:hover {
      color: $gray-600;
    }
    &._active {
      color: $primary;
    }
    &--prev,
    &--next {
      background-repeat: no-repeat;
      background-position: center;
      width: 24px;
      height: 24px;
    }
    &--prev {
      background-image: url(../assets/images/icons/arrow-right.svg);
      transform: rotate(180deg);
    }
    &--next {
      background-image: url(../assets/images/icons/arrow-right.svg);
    }
  }
}
</style>
