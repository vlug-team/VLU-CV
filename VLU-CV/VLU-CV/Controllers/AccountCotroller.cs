using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VLU_CV.Controllers
{
    public class AccountCotroller
    {
        [Authorize]

        [Route("get_UserIdGuid")]

        [HttpGet("get_UserIdGuid")]
        public async Task<ActionResult<string>> get_UserIdGuid()

        {

            //-------------< Liste: GetArticles >-------------



            //--< Get User ID >--

            //internal referenz-Number for tracking in tables

            String sIDUserGuid = User.;   //*ID in aspUsers wie: 1428ca0b-186c..

            if (sIDUserGuid == "") return BadRequest();

            //--</ Get User ID >--



            return new JsonResult(new { useridguid = sIDUserGuid });

            //-------------</ Liste: GetArticles >-------------

        }

        public static string getUserIdGuid(this ClaimsPrincipal user)

        {

            //------------< getUserId(User) >------------

            //*returns the current UserID

            if (!user.Identity.IsAuthenticated)

                return null;



            ClaimsPrincipal currentUser = user;



            //< output >

            return currentUser.FindFirst(ClaimTypes.NameIdentifier).Value;

            //</ output >

            //------------</ getUserId(User) >------------

        }
    }
}
