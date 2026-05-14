---
title: "Take Action"
date: 2026-05-02T17:45:25-04:00
language: en
description: Take Action
draft: true
---

<script src="/scripts/take-action.js"></script>

**Tell the Fairfax County Board of Supervisors that mass surveillance betrays public trust and puts our neighbors at risk.**  

Click below to find your District Supervisor. On the map that shows up, enter your address and view the details in the left-hand panel.

<button class="cta-button" id="find-supervisor" onclick="window.open('https\:\/\/www.fairfaxcounty.gov/myneighborhood/','_blank')">FIND YOUR DISTRICT SUPERVISOR</button>

Next, select your District Supervisor from the dropdown.

<select class="cta-dropdown" name="supervisors" id="supervisors-dropdown">
  <option value="select">Select Your District Supervisor...</option>
  <option value="smith">Kathy Smith, Sully District</option>
  <option value="heizer">Rachna Sizemore Heizer, Braddock District</option>
  <option value="bierman">James Bierman, Dranesville District</option>
  <option value="lusk">Rodney Lusk, Franconia District</option>
  <option value="alcorn">Walter Alcorn, Hunter Mill District</option>
  <option value="jimenez">Andres Jimenez, Mason District</option>
  <option value="storck">Daniel Storck, Mount Vernon District</option>
  <option value="palchik">Dalia Palchik, Providence District</option>
  <option value="herrity">Pat Herrity, Springfield District</option>
  <option value="mckay">Jeffrey McKay, Chairman</option>
</select>

Finally, enter your name to auto-populate the email template.

<input class="cta-textbox" id="email-template-name" placeholder="Your full name...">

<button class="cta-button" id="generate-email" onclick="showEmailTemplate();">GENERATE EMAIL</button>

<div class="hide" id="send-message-div">
  <p>Use this template to email your District Supervisor. Personalize it to add stronger emphasis based on your own perspective.</p>
  
  <textarea name="body" class="cta-textbox" id="email-template" rows=20 style="width: 100%"></textarea>

  <button id="send-email-button" class="cta-button" onclick="sendEmail()">Send Email</button>
  
  <div id="fallback-message" style="margin-bottom: 10px; padding: 10px; border-left: 4px solid #007bff; font-size: 0.9em;"></div>
</div>

**Want to join our team? [Reach out](/contact) to learn more!**