---
title: "Toma medidas"
date: 2026-05-02T17:45:25-04:00
language: es
description: Toma medidas
draft: true
---

<script src="/scripts/take-action.js"></script>

**Diga a la Junta de Supervisores del Condado de Fairfax que la vigilancia masiva traiciona la confianza pública y pone en riesgo a nuestros vecinos.**  

Haz clic abajo para encontrar a tu Supervisor de Distrito. En el mapa que aparece, introduce tu dirección y consulta los detalles en el panel de la izquierda.

<button class="cta-button" id="find-supervisor" onclick="window.open('https\:\/\/www.fairfaxcounty.gov/myneighborhood/','_blank')">ENCUENTRA A TU SUPERVISOR DE DISTRITO</button>

A continuación, selecciona a tu Supervisor de Distrito en el desplegable.

<select class="cta-dropdown" name="supervisors" id="supervisors-dropdown">
  <option value="select">Selecciona tu supervisor de distrito...</option>
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

Por último, introduce tu nombre para rellenar automáticamente la plantilla de correo electrónico.

<input class="cta-textbox" id="email-template-name" placeholder="Tu nombre completo...">

<button class="cta-button" id="generate-email" onclick="showEmailTemplate();">GENERAR CORREO ELECTRÓNICO</button>

<div class="hide" id="send-message-div">
  <p>Utiliza esta plantilla para enviar un correo electrónico a tu supervisor de distrito. Personalízala para añadir mayor énfasis según tu propia perspectiva.</p>
  
  <textarea name="body" class="cta-textbox" id="email-template" rows=20 style="width: 100%"></textarea>

  <button id="send-email-button" class="cta-button" onclick="sendEmail()">Enviar correo electrónico</button>
  
  <div id="fallback-message" style="margin-bottom: 10px; padding: 10px; border-left: 4px solid #007bff; font-size: 0.9em;"></div>
</div>

**¿Quieres unirte a nuestro equipo?? [Contacta](/contact) para saber más!**