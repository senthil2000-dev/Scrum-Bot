<script src='../../js/data/scrums.js'></script>
<style src="../../css/scrums.scss" lang="scss"></style>

<Nav/>

{#if error}
    <p class="no-results">{error}</p>
{/if}
{#if scrums !== undefined}
    <div class="filter-wrap">
        <div class="date-range">
            <DateRangeSelect
            {startDateMin}
            {endDateMax}
            {name}
            {heading}
            {labels}
            {startDateId}
            {endDateId}
            on:onApplyDateRange={handleApplyDateRange} /> 
        </div>
    </div>
    {#if scrums.length === 0}
        {#if start && end}
            <p class="no-results">No scrums between {start} and {end}</p>
        {:else}
            <p class="no-results">No scrums found</p>
        {/if}
    {:else}
        {#if start && end}
            <p class="no-results">Scrums between {start} and {end}</p>
        {/if}
        <div class="talks-container">
            <section class="container">
                {#each scrums as scrum}
                <Scrum
                    id={scrum.id}
                    date={scrum.created_at}
                    author={scrumMaster}
                    topic={scrum.name}/>
                {/each}
            </section>
        </div>
    {/if}
{/if}
<FootNote/>

