export function paginaDos() {
    let paginaDos = `
    <div class="demo">
    <div class="contenedor">
      <div class="caja">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum hendrerit velit, quis
          ullamcorper sem congue ac. Quisque id magna rhoncus, sodales massa vel, vestibulum elit. Duis
          ornare accumsan egestas. Proin maximus lacus interdum leo molestie convallis. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut iaculis risus eu
          felis feugiat, eu mollis neque elementum. Donec interdum, nisl id dignissim iaculis, felis dui
          aliquet dui, non fermentum velit lectus ac quam. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
          <strong>This is strong,</strong> this is normal, <b>this is just bold,</b>
          <em>and this is emphasized!</em> And heck, <a href="/">here</a>'s a link.
        </p>
        <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
          "The HTML blockquote Element (or HTML Block Quotation Element) indicates that the enclosed
          text is an extended quotation. Usually, this is rendered visually by indentation (see
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#Usage_notes"
            >Notes</a
          >
          for how to change it). A URL for the source of the quotation may be given using the
          <code>cite</code> attribute, while a text representation of the source can be given using the
          <code>&lt;cite&gt;</code> cite element."
    
          <footer>
            <cite>MDN, "The Block Quotation element"</cite>
          </footer>
        </blockquote>
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
        </ul>
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
        </ol>
        <dl>
          <dt>Description list item 1</dt>
          <dd>Description list item 1.1</dd>
        </dl>
        <address>
          <a href="mailto:john.doe@example.com">john.doe@example.com</a><br />
          <a href="tel:778-330-2389">778-330-2389</a><br />
          <a href="sms:666-666-6666">666-666-6666</a><br />
        </address>
        <p>
          Below is some code, you can copy it with <kbd>Ctrl-C</kbd>. Did you know,
          <code>alert(1)</code> can show an alert in JavaScript!
        </p>
        <pre><code>// This logs a message to the console and check out the scrollbar.<br>console.log('Hello, world!')</code></pre>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Godzilla</td>
              <td>2</td>
              <td>$299.99</td>
            </tr>
            <tr>
              <td>Mozilla</td>
              <td>10</td>
              <td>$100,000.00</td>
            </tr>
            <tr>
              <td>Quesadilla</td>
              <td>1</td>
              <td>$2.22</td>
            </tr>
          </tbody>
        </table>
        <details>
          <summary>Some summary/details can't hurt!</summary>
          <p>Lorem ipsum dolor sit blah blah.</p>
        </details>
        <hr>
          <details name="cookies">
            <summary>Chispas de chocolate</summary>
            Deliciosas chispas de chocolate
          </details>
          <details name="cookies">
            <summary>Chispas de chocolate</summary>
            Deliciosas chispas de chocolate
          </details>
          <details name="cookies">
            <summary>Chispas de chocolate</summary>
            Deliciosas chispas de chocolate
          </details>
          <details name="cookies">
            <summary>Chispas de chocolate</summary>
            Deliciosas chispas de chocolate
          </details>
        </div>
        <div class="caja">
          <p>Here's a horizontal rule and image because I don't know where else to put them.</p>
          <img src="./img/space-8571725_1920 4.jpg" alt="Example kitten" />
          <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="john.doe@gmail.com" />

            <label for="id">User id (read only)</label>
            <input readonly name="id" id="id" value="04D6H89Z" />

            <label for="disabled">Random disabled input</label>
            <input disabled name="disabled" id="disabled" placeholder="Because why not?" />

            <label for="about">About me</label>
            <textarea name="about" id="about" placeholder="I am a textarea..."></textarea>
          </form>
          <h3 id="form-elements">Form elements</h3>
          <form>
            <label>Choose a Doe:</label>
            <div>
              <input type="radio" id="john" name="drone" value="john" checked />
              <label for="john">John Doe</label>
            </div>
            <div>
              <input type="radio" id="jane" name="drone" value="jane" checked />
              <label for="jane">Jane Doe</label>
            </div>
            <div>
              <input type="radio" id="johnny" name="drone" value="johnny" checked />
              <label for="johnny">Johnny Doe</label>
            </div>
            <label>Choose a Doe:</label>
            <select required>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <br />

            <input type="checkbox" name="remember" id="remember" checked />
            <label for="remember">Remember me</label>

            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </form>
          <div>
            <button type="button" id="dialog-trigger">
              Show me the dialog!
            </button>
            <span id="dialog-result"></span>
          </div>
  
          <dialog id="dialog">
            <header>This is a sample dialog</header>
            <form method="dialog">
              <p>What is your favorite pet animal?</p>
              <menu>
                <button value="feline">Cats</button>
                <button value="canine">Dogs</button>
                <button value="other">Others</button>
              </menu>
            </form>
          </dialog>
      </div>
    </div>
  </div>`;
  document.getElementById("paginaDos").innerHTML += paginaDos;
}