using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;

namespace VLU_CV.Models
{
	public class ValidationError
	{
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Field { get; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public int Code { get; set; }
        public string Message { get; }
        public ValidationError(string field, int code, string message)
        {
            Field = field != string.Empty ? field : null;
            Code = code != 0 ? code : 400;  //set the default code to 55. you can remove it or change it to 400.
            Message = message;
        }
    }
    public class ValidationResultModel
    {
        public string Message { get; }
        public List<ValidationError> Errors { get; }
        public ValidationResultModel(ModelStateDictionary modelState)
        {
            Message = "Validation Failed";
            Errors = modelState.Keys
                    .SelectMany(key => modelState[key].Errors.Select(x => new ValidationError(key, 0, x.ErrorMessage)))
                    .ToList();
        }
    }
    public class ValidationFailedResult : ObjectResult
    {
        public ValidationFailedResult(ModelStateDictionary modelState)
            : base(new ValidationResultModel(modelState))
        {
            StatusCode = StatusCodes.Status422UnprocessableEntity; //change the http status code to 422.
        }
    }
    public class ValidateModelAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                context.Result = new ValidationFailedResult(context.ModelState);
            }
        }
    }

}

