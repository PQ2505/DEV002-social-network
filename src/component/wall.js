import {
  savePublic,
  unsub,
  deletePublic,
  updatePublic,
  like,
  disLike,
  getPublicationForId,
} from '../lib/firestore.js';
// eslint-disable-next-line import/no-cycle
import { surfing } from '../main.js';
import { signOff, user } from '../lib/auth.js';

export const Wall = () => {
  const $sectionW = document.createElement('section'); // padre de tres
  const $divContainerWall = document.createElement('div'); // hijo 1
  const $divSaludo = document.createElement('div');
  const $imgLogoW = document.createElement('img');
  const $h2name = document.createElement('h2');
  const $h2WelcomeDesktop = document.createElement('h2');
  const $containerOrange = document.createElement('div'); // hijo 2
  const $divRightOrange = document.createElement('div');
  const $divImgWall = document.createElement('div');
  const $imgWall = document.createElement('img');
  const $imgWallDos = document.createElement('img');
  const $imgMancha = document.createElement('img');
  const $divLeftOrange = document.createElement('div');
  const $divH3Post = document.createElement('div');
  const $h3Post = document.createElement('h3');
  const $h3PostWall = document.createElement('h3');
  const $containerFormWall = document.createElement('div');
  const $formWall = document.createElement('form');
  const $inputPublication = document.createElement('textarea');
  const $inputBtnWall = document.createElement('input');
  const $containerPublication = document.createElement('div'); // hijo de section y padre de dos
  const $divSignOffCat = document.createElement('div'); // hijo 2
  const $btnSingOff = document.createElement('input');
  const $imgWallCat = document.createElement('img');
  // ---- HTML Semantico ----//

  $sectionW.appendChild($divContainerWall); // HIJO PRINCIPAL 1
  $divContainerWall.appendChild($divSaludo);
  $divSaludo.appendChild($imgLogoW);
  $divSaludo.appendChild($h2name);
  $divSaludo.appendChild($h2WelcomeDesktop);

  $sectionW.appendChild($containerOrange); // HIJO PRINCIPAL 2
  $containerOrange.appendChild($divRightOrange);
  $divRightOrange.appendChild($divImgWall);
  $divImgWall.appendChild($imgWall);
  $divImgWall.appendChild($imgWallDos);
  $containerOrange.appendChild($imgMancha);

  $containerOrange.appendChild($divLeftOrange);
  $divLeftOrange.appendChild($divH3Post);
  $divH3Post.appendChild($h3Post);
  $divH3Post.appendChild($h3PostWall);
  $divLeftOrange.appendChild($containerFormWall);
  $containerFormWall.appendChild($formWall);
  $formWall.appendChild($inputPublication);
  $formWall.appendChild($inputBtnWall);

  $sectionW.appendChild($containerPublication); // HIJO PRINCIPAL 3
  $sectionW.appendChild($divSignOffCat);
  $divSignOffCat.appendChild($btnSingOff);
  $divSignOffCat.appendChild($imgWallCat);

  // ----------ATRIBUTOS-------------//

  $sectionW.setAttribute('class', 'sectionWall');
  $divContainerWall.setAttribute('class', 'wallContainer');
  $divSaludo.setAttribute('class', 'Saludo');
  $imgLogoW.setAttribute('src', 'img/logoNewMe.png');
  $imgLogoW.setAttribute('alt', 'Logo NewMe');
  $h2name.setAttribute('class', 'h2Name');
  $h2name.textContent = 'Hello';
  $h2WelcomeDesktop.setAttribute('class', 'WelcomeDesktop');
  $h2WelcomeDesktop.textContent = 'What was your change today?';

  $containerOrange.setAttribute('class', 'ContainerOrange');

  $divRightOrange.setAttribute('class', 'rightOrange');
  $divImgWall.setAttribute('class', 'imagenWall');
  $imgWall.setAttribute('src', 'img/imgMuro.png');
  $imgWall.setAttribute('alt', 'Img Niña Muro');
  $imgWall.setAttribute('class', 'imgWall');
  $imgWallDos.setAttribute('src', 'img/imgMuroDos.png');
  $imgWallDos.setAttribute('alt', 'Img Niña Muro');
  $imgWallDos.setAttribute('class', 'imgWallDos');
  $imgMancha.setAttribute('src', 'img/vector 7.png');
  $imgMancha.setAttribute('alt', 'Img Mancha Muro');
  $imgMancha.setAttribute('class', 'imgManchaWall');

  $divLeftOrange.setAttribute('class', 'leftOrange');
  $divH3Post.setAttribute('class', 'hPost');
  $h3Post.textContent = 'What was your change today?';
  $h3Post.setAttribute('class', 'h3Post');
  $h3PostWall.textContent = 'HELLO';
  $h3PostWall.setAttribute('class', 'h3PostWall');
  $containerFormWall.setAttribute('class', 'ContFormWall');
  $formWall.setAttribute('class', 'formWall');
  $formWall.setAttribute('id', 'formWall');

  $inputPublication.setAttribute('name', 'inp_publication');
  $inputPublication.setAttribute('class', 'inp_publication');
  $inputPublication.setAttribute('id', 'inp_idPublication');
  $inputPublication.setAttribute('placeholder', 'Write your message here');
  $inputPublication.setAttribute('required', '');
  $inputPublication.setAttribute('rows', '6');
  $inputBtnWall.setAttribute('type', 'submit');
  $inputBtnWall.setAttribute('name', 'btn_send');
  $inputBtnWall.setAttribute('class', 'btn_send');
  $inputBtnWall.setAttribute('id', 'btn_idSend');
  $inputBtnWall.setAttribute('value', 'SEND');

  $divSignOffCat.setAttribute('class', 'signOff');

  $btnSingOff.setAttribute('type', 'button');
  $btnSingOff.setAttribute('class', 'btnSignOff');
  $btnSingOff.setAttribute('value', 'SIGN OUT');

  $imgWallCat.setAttribute('src', 'img/gato.png');
  $imgWallCat.setAttribute('alt', 'wallCat');

  // función para crear publicación
  $formWall.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      await savePublic($inputPublication.value, 0, []);
      $formWall.reset();
    } catch (error) {
      throw new Error('Error');
    }
  });

  $btnSingOff.addEventListener('click', async () => {
    await signOff();
    surfing('/');
  });

  // creacion de tarjeta con el vigilador unsub
  unsub((querySnapshot) => {
    $containerPublication.innerHTML = '';
    querySnapshot.forEach((docs) => {
      const { coment } = docs.data();
      const $divPublicUser = document.createElement('div');
      const $divPublicU = document.createElement('div');
      const $pComent = document.createElement('p');
      const $divReactions = document.createElement('div');
      const $divReactionLikes = document.createElement('div');
      const $iHeart = document.createElement('i');
      const $pCountLikes = document.createElement('p');
      const $inputReactionLikes = document.createElement('input');
      const $divReactionEdit = document.createElement('div');
      const $inputReactionEdit = document.createElement('input');
      const $divReactionDelete = document.createElement('div');
      const $inputReactionDelete = document.createElement('input');

      $containerPublication.appendChild($divPublicUser);
      $divPublicUser.appendChild($divPublicU);
      $divPublicUser.appendChild($divReactions);
      $divPublicU.appendChild($pComent);
      $divReactions.appendChild($divReactionLikes);
      $divReactionLikes.appendChild($iHeart);
      $divReactionLikes.appendChild($pCountLikes);
      $divReactionLikes.appendChild($inputReactionLikes);
      $divReactions.appendChild($divReactionEdit);
      $divReactionEdit.appendChild($inputReactionEdit);
      $divReactions.appendChild($divReactionDelete);
      $divReactionDelete.appendChild($inputReactionDelete);

      $containerPublication.setAttribute('class', 'contPublic');
      $divPublicUser.setAttribute('class', 'publicUser');
      $divPublicU.setAttribute('class', 'div_publiU');
      $divPublicU.setAttribute('id', 'div_idPubliU');

      $pComent.textContent = coment;
      // $pContent.textContent ('diseable', 'true')
      $divReactions.setAttribute('class', 'reactions');
      $divReactionLikes.setAttribute('class', 'reactionsLikes');
      $iHeart.setAttribute('class', 'fa-regular fa-heart');
      $iHeart.setAttribute('data-id', docs.id);
      $inputReactionLikes.setAttribute('type', 'submit');
      $inputReactionLikes.setAttribute('name', 'inp_reaction');
      $inputReactionLikes.setAttribute('class', 'inp_reaction');
      $inputReactionLikes.setAttribute('id', 'inp_idReaction');
      $inputReactionLikes.setAttribute('value', docs.data().amountLikes);
      $divReactionEdit.setAttribute('class', 'reactionEdit');
      $inputReactionEdit.setAttribute('type', 'submit');
      $inputReactionEdit.setAttribute('name', 'inp_reactionEdit');
      $inputReactionEdit.setAttribute('class', 'inp_reactionEdit');
      $inputReactionEdit.setAttribute('id', 'inp_idReactionEdit');
      $inputReactionEdit.setAttribute('data-id', docs.id);
      $inputReactionEdit.setAttribute('value', 'Edit');
      $divReactionDelete.setAttribute('class', 'reactionDelete');
      $inputReactionDelete.setAttribute('type', 'submit');
      $inputReactionDelete.setAttribute('name', 'inp_reactionDelete');
      $inputReactionDelete.setAttribute('class', 'inp_reactionDelete');
      $inputReactionDelete.setAttribute('id', 'inp_idReactionDelete');
      $inputReactionDelete.setAttribute('data-id', docs.id);
      $inputReactionDelete.setAttribute('value', 'Delete');

      const btnDelete = $containerPublication.querySelectorAll('.inp_reactionDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
        // eslint-disable-next-line no-restricted-globals
          const deleteConfirm = confirm('Do you want to delete this post?');
          if (deleteConfirm) {
            deletePublic(e.target.dataset.id);
          }
        });
      });

      const btnEdit = $containerPublication.querySelectorAll('.inp_reactionEdit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const editComent = prompt('Update your coment:');
          updatePublic(e.target.dataset.id, { coment: editComent });
        });
      });

      const btnLike = $containerPublication.querySelectorAll('.fa-regular');
      btnLike.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const currentUserLike = user().uid;
          const idLikeButton = e.target.dataset.id;

          getPublicationForId(idLikeButton)
            .then((document) => {
              const post = document.data();
              if (!post.usersLikeArray.includes(currentUserLike)) {
                const likes = post.amountLikes + 1;
                like(idLikeButton, likes, currentUserLike);
              } else {
                const likes = post.amountLikes - 1;
                disLike(idLikeButton, likes, currentUserLike);
              }
            })
            .catch(() => {});
        });
      });
    });
  });

  return $sectionW;
};
