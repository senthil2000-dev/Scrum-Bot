<script src='../../js/lightningtalks.js'></script>
<style src="../../css/addtalk.scss" lang="scss"></style>
<Nav/>	
<div class="talks-container">
    <section class="container">
        {#if talks.length === 0}
            <p>No active topics</p>
        {:else}
            {#each talks as talk}
            <Lightningtalk
                id={talk.id}
                date={talk.date}
                author={talk.author}
                topic={talk.topic} 
                content={talk.content}/>
            {/each}
        {/if}
    </section>
    <!-- <form on:submit={addTalk} class="add-talk-form">
        <input type="text" placeholder="Author" bind:value={talk.author} required/>
        <input type="text" placeholder="Topic" bind:value={talk.topic} required/>
        <input type="date" placeholder="Date" bind:value={talk.date} required/>
        <textarea cols="30" rows="10" placeholder="Content" bind:value="{talk.content}" required></textarea>
        <input type="submit" class="btn btn-primary" value="Add talk" />
    </form> -->
    <div class="container form-holder">
        <div class="row">
                <h1>Share your talk</h1>
        </div>
        <div class="row">
                <h4 style="text-align:center">We'd love to hear from you!</h4>
        </div>
        <div class="row input-container">
            <form  on:submit="{addTalk}">
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <input type="text" bind:value={talk.author} required/>
                        <label for="#">Author</label> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" bind:value={talk.topic} required/>
                        <label for="#">Topic</label> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" style="float:right;">
                        <input type="date" bind:value={talk.date} required/>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <textarea cols="30" rows="10" bind:value="{talk.content}" required></textarea>
                        <label for="#">Content</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <input type="submit" class="btn-lrg submit-btn" value="Share now"/>
                </div>
            </form>
        </div>
    </div>
</div>

